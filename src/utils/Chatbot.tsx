"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, AlertCircle, Bot, User, Sparkles } from "lucide-react";
import { useSession } from "@clerk/nextjs";
import { TbMessageChatbotFilled } from "react-icons/tb";


export default function Chatbot() {
  const { session } = useSession();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string; timestamp: Date }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setError("");
    const userMessage = {
      sender: "user" as const,
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
            // Include Clerk session ID if needed by backend
            "X-Clerk-Session-Id": session?.id || "",
          },
          body: JSON.stringify({ query: userMessage.text }),
        }
      );

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      const botReply = data.reply || "No response from AI";

      const botMessage = {
        sender: "bot" as const,
        text: botReply,
        timestamp: new Date(),
      };

      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="w-[380px] h-[400px] bg-white flex flex-col rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600  text-white px-6 py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative flex items-center justify-center gap-3">
          <div className="p-2 bg-white/20 rounded-full">
            <Sparkles className="w-5 h-5" />
          </div>
          <h1 className="font-bold text-lg tracking-wide">InsightChat AI</h1>
        </div>
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4 space-y-4 backdrop-blur-sm"
        style={{ maxHeight: "400px" }}
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-3 opacity-60">
            <div className="p-4 bg-gradient-to-br from-violet-100 to-blue-100 rounded-full">
              <TbMessageChatbotFilled />
            </div>
            <div>
              <p className="text-gray-600 font-medium">
                Welcome to InsightChat!
              </p>
              <p className="text-sm text-gray-500">
                Ask me anything to get started
              </p>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="p-1.5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full shadow-lg flex-shrink-0">
                <TbMessageChatbotFilled />
              </div>
            )}

            <div
              className={`px-4 py-3 rounded-2xl max-w-[75%] text-sm shadow-lg relative ${
                msg.sender === "user"
                  ? "bg-gradient-to-br from-violet-600 to-purple-600 text-black shadow-violet-200"
                  : "bg-white text-gray-800 border border-gray-100 shadow-gray-200"
              }`}
            >
              <div className="mb-1">{msg.text}</div>
              <div
                className={`text-[10px] text-right opacity-60 ${
                  msg.sender === "user" ? "text-black" : "text-gray-600"
                }`}
              >
                {formatTime(msg.timestamp)}
              </div>
              <div
                className={`absolute bottom-0 w-3 h-3 ${
                  msg.sender === "user"
                    ? "right-0 translate-x-1 bg-gradient-to-br from-violet-600 to-purple-600 rotate-45"
                    : "left-0 -translate-x-1 bg-white border-l border-b border-gray-100 rotate-45"
                }`}
              ></div>
            </div>

            {msg.sender === "user" && (
              <div className="p-1.5 bg-blue-500 rounded-full shadow-lg flex-shrink-0">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-end gap-2 justify-start">
            <div className="p-1.5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full shadow-lg flex-shrink-0">
              <TbMessageChatbotFilled />
            </div>
            <div className="px-4 py-3 rounded-2xl bg-white shadow-lg border border-gray-100 relative">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <div className="absolute bottom-0 left-0 -translate-x-1 w-3 h-3 bg-white border-l border-b border-gray-100 rotate-45"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Error */}
      {error && (
        <div className="mx-4 mb-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2 shadow-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Input */}
      <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-gray-100">
        <div className="flex items-center gap-3 p-2 bg-white rounded-full shadow-lg border border-gray-100">
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
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-black p-2.5 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
            disabled={loading || !input.trim()}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
