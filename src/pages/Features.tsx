import { useState } from "react";
import { API_ENDPOINTS } from "../config";


export default function Features() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const checkPrivacy = async () => {
    setError("");
    setResult(null);
    try {
      const res = await fetch(API_ENDPOINTS.CHECK_PRIVACY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Unknown error occurred");
    }
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
        <div className="flex gap-6">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text such as my email is john.doe@yahoo.com or my phone number is 555-222-1234 to check..."
            className="border p-3 w-full rounded-md"
            style={{ minHeight: "120px", flex: 1 }}
          />
          <textarea
            value={
              error
                ? `Error:\n${error}`
                : result
                ? JSON.stringify(result, null, 2)
                : ""
            }
            readOnly
            className="border p-3 w-full rounded-md bg-gray-100"
            style={{ minHeight: "120px", flex: 1 }}
            placeholder="Result will appear here..."
          />
        </div>
        <button
          onClick={checkPrivacy}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Check Privacy
        </button>
      </div>
    </div>
  );
}
