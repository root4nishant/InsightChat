/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAuth } from "@clerk/nextjs";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PlansPage() {
  const { userId } = useAuth();

  const plans = [
    { name: "Starter", price: 49, tokens: 50 },
    { name: "Pro", price: 99, tokens: 120 },
    { name: "Unlimited", price: 199, tokens: 500 },
  ];

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) {
        return resolve(true); // already loaded
      }

      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (plan: any) => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay. Try again later.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // ✅ Replace with your real Razorpay TEST key
      amount: plan.price * 100, // in paise
      currency: "INR",
      name: "Insight Chat",
      description: `Purchase ${plan.tokens} tokens`,
      handler: function (response: any) {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/confirm_payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            payment_id: response.razorpay_payment_id,
            plan: plan.name,
            tokens: plan.tokens,
            user_id: userId, // from Clerk
          }),
        })
          .then((res) => res.json())
          .then(() => (window.location.href = "/dashboard"));
      },
      prefill: {
        name: "Insight User",
        email: "test@example.com",
      },
      theme: {
        color: "#6366F1",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Choose a Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="border p-6 rounded shadow text-center bg-white"
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="my-2 text-lg font-medium text-gray-700">
              ₹{plan.price}
            </p>
            <p className="text-gray-500">{plan.tokens} Tokens</p>
            <button
              className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded hover:bg-indigo-700"
              onClick={() => handlePayment(plan)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
