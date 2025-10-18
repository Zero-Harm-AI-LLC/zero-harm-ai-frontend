import { useState } from "react";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../config";

export default function Features() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const checkPrivacy = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.CHECK_PRIVACY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      
      // Log response details
      console.log('Response status:', res.status);
      console.log('Response headers:', res.headers);
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('Error response:', errorText);
        throw new Error(`Error: ${res.status} - ${errorText}`);
      }
      // ... rest of code
    } catch (err: any) {
      console.error('Full error:', err);
      setError(err.message || "Unknown error occurred");
    }
  };

  const renderDetectors = (detectors: Record<string, any[]>) => {
    if (!detectors || Object.keys(detectors).length === 0) {
      return <div>No sensitive data detected.</div>;
    }
    return (
      <div>
        {Object.entries(detectors).map(([type, items]) => (
          <div key={type} className="mb-2">
            <div className="font-semibold">{type}:</div>
            {items && items.length > 0 ? (
              <ul className="list-disc pl-5">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-mono bg-gray-100 px-1 rounded">
                      {item.span}
                    </span>{" "}
                    <span className="text-xs text-gray-500">
                      (start: {item.start}, end: {item.end})
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-500 text-sm italic">No matches</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const coreFeatures = [
    "🆓 100% free and open source",
    "🐳 Docker deployment ready",
    "🛡️ Baseline sensitive data detection and redaction",
    "🔌 Easy Python library integration",
    "🤖 AI-Powered Detection or Fast Regex Detection", 
    "🤖 ML trainable for custom enterprise needs",
  ];

  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Open-source AI Safety Tools
      </motion.h1>

      <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-center">
        Open-source, enterprise-grade AI safety tools that protect your applications from 
        exposing sensitive data such as PII, intellectual property, and more.      
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {coreFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-lg mr-3">{feature.split(' ')[0]}</span>
              <span className="text-gray-700">{feature.substring(feature.indexOf(' ') + 1)}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-6 text-center"
        >
          Try It Live
        </motion.h2>

        <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
          Test our PII or harmful content detection right in your browser. Try entering an email, phone number, SSN or harmful text.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <motion.textarea
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text like: My email is john.doe@yahoo.com or my phone is 555-222-1234"
              className="border p-4 w-full rounded-lg shadow-sm"
              style={{ minHeight: "120px", flex: 1 }}
            />
            <motion.textarea
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backgroundColor: success ? "#d1fae5" : "#f9fafb",
              }}
              transition={{ duration: 0.6 }}
              value={
                error
                  ? `Error:\n${error}`
                  : result && result.redacted
                  ? result.redacted
                  : ""
              }
              readOnly
              className="border p-4 w-full rounded-lg shadow-sm bg-gray-50"
              style={{ minHeight: "120px", flex: 1 }}
              placeholder="Redacted text appears here..."
            />
          </div>

          {error ? (
            <div className="text-red-600 font-semibold mb-4">{error}</div>
          ) : result && result.detectors ? (
            <div className="mb-4 p-4 bg-blue-50 rounded-lg">
              <div className="font-semibold mb-2">Detected Sensitive Data:</div>
              {renderDetectors(result.detectors)}
            </div>
          ) : null}

          <div className="text-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              onClick={checkPrivacy}
              disabled={loading}
              className={`px-8 py-3 rounded-lg text-white font-semibold ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white inline mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {loading ? "Checking..." : "Check for PII or Harmful Data"}
            </motion.button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-green-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4 text-green-800">🚀 Get Started</h3>
          <p className="text-gray-700 mb-6">
            Download our tools and start protecting your AI applications today.
          </p>
          <a
            href="/docs"
            className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 font-semibold"
          >
            View Documentation
          </a>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">🤝 Need Help?</h3>
          <p className="text-gray-700 mb-6">
            Our team helps businesses implement responsible AI practices.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-semibold"
          >
            Get Consulting
          </a>
        </div>
      </section>
    </div>
  );
}