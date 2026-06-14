"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function sendMessage() {
    const res = await fetch(
      "http://127.0.0.1:8000/api/agent/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }
    );

    const data = await res.json();
    setResponse(data.agent_response);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white p-8">
      <h1 className="text-6xl font-bold text-center mb-3">
        🚀 FinPilot AI
      </h1>

      <p className="text-center text-gray-300 mb-10">
        Your Intelligent Financial Copilot
      </p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold mb-4">
            📊 Expense Dashboard
          </h2>

          <div className="bg-black/30 p-4 rounded-xl mb-4">
            Total Spending
            <div className="text-3xl font-bold text-green-400">
              ₹0
            </div>
          </div>

          <div className="bg-black/30 p-4 rounded-xl">
            Upload receipt screenshots here later
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold mb-4">
            🤖 AI Advisor
          </h2>

          <input
            type="text"
            placeholder="Ask FinPilot..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded-xl bg-white text-black outline-none"
          />

          <button
            onClick={sendMessage}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-bold"
          >
            Send Message
          </button>

          {response && (
            <div className="mt-4 bg-black/30 p-4 rounded-xl">
              {response}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}