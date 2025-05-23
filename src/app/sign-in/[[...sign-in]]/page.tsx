// app/sign-in/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] overflow-hidden px-4">
      {/* 💠 Background animated blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-200 rounded-full blur-3xl opacity-40 animate-ping" />

      {/* 🔐 Auth card container */}
      <div className="z-10 max-w-5xl w-full bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* 🚀 LEFT: Chat analysis intro */}
        <div className="bg-[#0f172a] text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl font-extrabold leading-tight text-center mb-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              InsightChat
            </span>
          </h1>
          <p className="text-base text-gray-300 text-center max-w-sm mb-6">
            Unlock powerful insights from every customer conversation. Let AI
            make your chats smarter and your support better.
          </p>
          {/* <img
            src="/chat-analyze-illustration.svg"
            alt="Chat Analysis"
            className="w-28 h-28 object-contain mt-2"
            onError={(e) =>
              ((e.target as HTMLImageElement).style.display = "none")
            }
          /> */}
        </div>

        {/* 🧾 RIGHT: Clerk Sign-In form */}
        <div className="flex items-center justify-center p-8 md:p-16 bg-white">
          <SignIn
            path="/sign-in"
            routing="path"
            appearance={{
              elements: {
                card: "shadow-none border border-gray-200 rounded-xl",
                headerTitle: "text-lg font-semibold text-gray-800",
                socialButtonsBlockButton:
                  "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 transition",
              },
              variables: {
                colorPrimary: "#6366f1", // Indigo
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
