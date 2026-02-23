"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatBotProps {
  onCommand: (command: string) => string;
}

export function ChatBot({ onCommand }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello dear guest! How can I assist you today? For example: 'turn on main hall chandelier'",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    console.log("onCommand صدا زده شد با:", userMessage);

    // اضافه کردن پیام کاربر
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);

    // مهم: اینجا onCommand رو صدا می‌زنیم و پاسخ رو می‌گیریم
    const reply = onCommand(userMessage);

    // اضافه کردن پاسخ بات با تأخیر
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: reply, isUser: false }]);
    }, 800);

    setInput("");
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300",
        isMinimized ? "w-14 h-14" : "w-full max-w-md",
      )}
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-amber-600 hover:bg-amber-500 rounded-full flex items-center justify-center shadow-lg transition-colors"
        >
          <Maximize2 className="h-7 w-7 text-white" />
        </button>
      ) : (
        <div className="bg-black/80 backdrop-blur-xl border border-amber-600/40 rounded-2xl shadow-2xl overflow-hidden">
          {/* هدر */}
          <div className="bg-gradient-to-r from-amber-900/80 to-black/80 p-3 border-b border-amber-500/30 flex justify-between items-center">
            <h3 className="text-amber-300 font-cinzel text-lg text-center flex-1">
              CastleMind Assistant
            </h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 hover:bg-amber-700/50 rounded-full transition-colors"
            >
              <Minimize2 className="h-5 w-5 text-amber-200" />
            </button>
          </div>

          {/* پیام‌ها */}
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex",
                  msg.isUser ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
                    msg.isUser
                      ? "bg-amber-600/80 text-white rounded-br-none"
                      : "bg-amber-900/40 text-amber-100 rounded-bl-none border border-amber-500/30",
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* ورودی */}
          <div className="p-3 border-t border-amber-500/30 flex items-center gap-2 bg-black/50">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Say something... e.g. 'turn on main hall chandelier'"
              className="flex-1 bg-black/60 border border-amber-600/50 rounded-xl px-4 py-2 text-white placeholder-amber-300/50 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-500"
            />
            <button
              onClick={handleSend}
              className="p-3 bg-amber-600 hover:bg-amber-500 rounded-xl transition-colors flex items-center justify-center"
            >
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
