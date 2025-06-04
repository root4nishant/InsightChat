// app/dashboard/layout.tsx
"use client";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className=" min-h-screen bg-gray-50">
      {/* Main content */}
      {children}

      {/* Toggle button */}
      {/* <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition w-12 h-12"
        onClick={() => setIsChatbotOpen((prev) => !prev)}
      >
        {isChatbotOpen ? "×" : "💬"}
      </button> */}

      {/* Chatbot panel */}
    
      
    </div>
  );
}
