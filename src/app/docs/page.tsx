import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">
        📘 InsightChat Documentation
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔍 About the App</h2>
        <p className="leading-relaxed text-gray-600">
          InsightChat is an AI-powered real-time WhatsApp chat analytics
          platform designed for small businesses, educators, and individuals. It
          features a browser extension that captures chat data, a backend that
          processes insights using GenAI (Gemini), and a Next.js frontend to
          display analytics interactively. The system includes secure
          authentication (Clerk), a token-based credit system, and optional
          automation features.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📂 Available Pages</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Dashboard</strong>: Displays insights like sentiment,
            keywords, and AI-powered suggestions from chat analysis.
          </li>
          <li>
            <strong>Plans</strong>: Offers token plans powered by Razorpay to
            enable extended AI usage.
            <Link href="/plans" className="font-bold text-blue-600">
              {" "}
              Visit to Pay
            </Link>
          </li>
          <li>
            <strong>Docs</strong>: Provides app documentation, architecture, and
            usage instructions.
          </li>
          <li>
            <strong>Login/Register</strong>: Securely handles user
            authentication via Clerk.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 How It Works</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>User logs in using Clerk authentication.</li>
          <li>
            Chrome extension captures chat data from WhatsApp Web and sends it
            to backend.
          </li>
          <li>
            FastAPI backend uses Gemini AI to analyze data and store structured
            results in MongoDB.
          </li>
          <li>
            Frontend fetches results and visualizes them using Next.js and
            Recharts.
          </li>
          <li>
            Users with low tokens are redirected to the <strong>Plans</strong>{" "}
            page to top-up via Razorpay.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📦 Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Frontend</strong>: Next.js, Tailwind CSS, Recharts
          </li>
          <li>
            <strong>Backend</strong>: FastAPI, MongoDB, Gemini AI (Google
            GenAI), LangChain
          </li>
          <li>
            <strong>Auth</strong>: Clerk (session-based)
          </li>
          <li>
            <strong>Extension</strong>: Vanilla JavaScript for WhatsApp Web
            scraping
          </li>
          <li>
            <strong>Payments</strong>: Razorpay
          </li>
        </ul>
      </section>
    </div>
  );
}
