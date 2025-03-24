"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "@clerk/nextjs";
import axios from "axios";

function Test() {
  const [data, setData] = useState("");
  const { session, isLoaded } = useSession();
  console.log(session);

  useEffect(() => {
    const sendTestChat = async () => {
      if (!isLoaded || !session) {
        console.warn("⚠️ Session not ready yet.");
        return;
      }

      try {
        const sessionId = session.id;
        const response = await axios.post(
          "http://localhost:8000/process_chat",
          {
            messages: ["Hello", "This is a test from frontend!"],
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-Clerk-Session-Id": sessionId,
            },
          }
        );
        setData(response.data);
        console.log("✅ API Response:", response.data);
      } catch (error) {
        console.error("❌ API Error:", error);
      }
    };

    sendTestChat();
  }, [isLoaded, session]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="text-lg mb-4">Sending test message to backend...</p>
      {data && (
        <pre className="bg-gray-100 p-4 rounded text-sm text-gray-700">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default Test;
