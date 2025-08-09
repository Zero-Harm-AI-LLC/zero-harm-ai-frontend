import { useState } from "react";

export default function Features() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const checkPrivacy = async () => {
    const res = await fetch("https://<backend-url>/check_privacy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Core Product Pillars</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>Pre-Processing Filter: Detect & redact sensitive data before sending to LLM.</li>
        <li>Post-Processing Filter: Scan outputs before showing to end users.</li>
        <li>Advanced Detection: NER, Regex, and ML-based approaches.</li>
        <li>Secrets Scanner: Find API keys, passwords, credit card numbers.</li>
        <li>Configurable Redaction Rules.</li>
        <li>Audit & Reporting for compliance.</li>
        <li>SDK & Middleware APIs for easy integration.</li>
      </ul>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Live Privacy Check Demo</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to check..."
          className="border p-3 w-full rounded-md"
        />
        <button
          onClick={checkPrivacy}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Check Privacy
        </button>
        {result && (
          <pre className="mt-4 bg-gray-100 p-4 rounded-md">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
