
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [method, setMethod] = useState("hybrid");
  const [result, setResult] = useState<string | null>(null);

  async function checkLLMOutput() {
    const res = await fetch(`http://localhost:5000/api/moderate/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    if (data.error) {
      setResult(`❌ Error: ${data.error}`);
    } else {
      setResult(data.flagged ? `⚠️ Flagged: ${data.reason}` : "✅ Safe");
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Real-Time AI Firewall</h1>
      <p className="mb-6 text-gray-600">
        Secure your AI pipelines with real-time moderation.
      </p>
      <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Live LLM Moderation Demo</h2>
        
        <div className="mb-4 flex justify-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="hybrid"
              checked={method === "hybrid"}
              onChange={() => setMethod("hybrid")}
            />
            <span>Hybrid</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="openai"
              checked={method === "openai"}
              onChange={() => setMethod("openai")}
            />
            <span>OpenAI API</span>
          </label>
        </div>

        <textarea
          className="w-full p-3 border rounded mb-4"
          rows={4}
          placeholder="Enter LLM output here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={checkLLMOutput}
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
        >
          Check LLM Output
        </button>
        {result && <div className="mt-4 text-lg">{result}</div>}
      </div>
    </div>
  );
}
