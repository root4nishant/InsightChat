"use client";

import Navbar from "@/components/custom/nav";
import { useSession } from "@clerk/nextjs";
import { AlertCircle, Bot, Send, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";

export default function ChatbotDashboard() {
  const { session } = useSession();
  const router = useRouter();

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm InsightChat AI. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const suggestions = [
    "Summarize key insights",
    "Did anyone ask something urgent?",
    "Any links or resources shared?",
    "What’s the overall tone of the chat?",
    "List key action points",
    "Highlight any negative feedback",
    "Show me all actionables",
    "Did anyone mention a deadline?",
    "Are there any repeated concerns?",
    "Show all shared numbers or contact details",
  ];

  const sendMessage = async () => {
    if (!input.trim()) return;

    setError("");
    const userMessage = {
      sender: "user",
      text: input.trim(),
      timestamp: new Date(),
    };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://insightchat-root.onrender.com/chatbot/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Clerk-Session-Id": session?.id || "",
          },
          body: JSON.stringify({ query: userMessage.text }),
        }
      );

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      const botReply = data.reply || "No response from AI";

      const botMessage = {
        sender: "bot",
        text: botReply,
        timestamp: new Date(),
      };

      setMessages([...newMessages, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...newMessages,
        {
          sender: "bot",
          text: "⚠️ Sorry, I encountered an error. Please try again.",
          timestamp: new Date(),
        },
      ]);
      setError("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };


const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
};

  type PromptCardProps = {
    prompts: string[];
    onClick: (prompt: string) => void;
  };

  const PromptCard: React.FC<PromptCardProps> = ({ prompts, onClick }) => (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 w-full space-y-4">
      <h3 className="text-sm font-medium text-gray-700">Try asking:</h3>
      <div className="flex flex-wrap gap-2">
        {prompts.map((p, i) => (
          <button
            key={i}
            onClick={() => onClick(p)}
            className="text-sm bg-violet-50 text-violet-700 px-3 py-1 rounded-full border border-violet-200 hover:bg-violet-100 transition text-left"
          >
            {p}
          </button>
        ))}
      </div>
      <button
        onClick={() => router.push("/dashboard")}
        className="mt-4 w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium py-2 rounded-lg hover:opacity-90 transition"
      >
        Go to Dashboard
      </button>
    </div>
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 lg:px-20 bg-gray-50 ">
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 pt-24 max-w-screen-xl mx-auto">
          <div className="space-y-2">
            <PromptCard prompts={suggestions} onClick={(p: string) => setInput(p)} />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden h-[82vh]">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-t-xl">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-lg">InsightChat AI</h2>
              </div>
            </div>

            <div className="flex-1 h-60  overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="p-1.5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full shadow-md">
                      <TbMessageChatbotFilled className="text-white w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm relative break-words ${
                      msg.sender === "user"
                        ? "bg-gradient-to-br from-violet-600 to-purple-600 text-white"
                        : "bg-gray-50 text-gray-800 border border-gray-200"
                    }`}
                  >
                    <div>{msg.text}</div>
                  </div>

                  {msg.sender === "user" && (
                    <div className="p-1.5 bg-blue-500 rounded-full shadow-md">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="p-1.5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full shadow-md">
                    <TbMessageChatbotFilled className="text-white w-4 h-4" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {error && (
              <div className="mx-4 mb-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2 shadow-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
              <div className="flex items-center gap-3 p-2 bg-white rounded-full shadow-sm border">
                <input
                  ref={inputRef}
                  type="text"
                  className="flex-1 px-4 py-2 text-sm bg-transparent focus:outline-none placeholder-gray-500"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-2.5 rounded-full hover:scale-105 transition duration-150 disabled:opacity-50"
                  disabled={loading || !input.trim()}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
