/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/nav";
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
      if (document.getElementById("razorpay-script")) return resolve(true);

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
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: plan.price * 100,
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
            user_id: userId,
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
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 lg:px-20 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 mb-12 text-center">
          Choose a Plan
        </h1>

        <div className="grid gap-10 md:grid-cols-3 w-full max-w-6xl">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:scale-105 transform transition duration-300 border border-gray-200 text-center"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {plan.name}
              </h2>
              <p className="text-3xl font-extrabold text-indigo-600 mb-2">
                ₹{plan.price}
              </p>
              <p className="text-gray-500 text-sm mb-6">{plan.tokens} Tokens</p>
              <button
                onClick={() => handlePayment(plan)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-lg"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
