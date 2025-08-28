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
    setError("");
    setResult(null);
    setLoading(true);
    setSuccess(false);
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
      setSuccess(true);
      setTimeout(() => setSuccess(false), 1200);
    } catch (err: any) {
      setError(err.message || "Unknown error occurred");
    } finally {
      setLoading(false);
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

  const featuresLeft = [
    "Detect & redact sensitive data before sending to AI systems.",
    "Scan AI outputs before showing to end users.",
    "Advanced detection powered by NER, Regex, and ML approaches.",
    "Instant feedback and real-time redaction.",
  ];

  const featuresRight = [
    "Configurable rules tailored to organizational needs.",
    "Audit & reporting tools to strengthen compliance.",
    "Open SDKs & middleware for easy adoption.",
    "Future-ready privacy & safety modules.",
    "Containerized deployment for accessibility & openness.",
  ];

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Our Approach to Safer AI
      </motion.h1>

      <p className="text-gray-700 max-w-3xl mb-8">
        As a non-profit, our goal is to provide open, transparent tools that help organizations use AI responsibly. 
        We build privacy-first technology to protect people, foster trust, and ensure that AI adoption aligns with human values.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ul className="list-disc pl-6 space-y-2">
          {featuresLeft.map((feat, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="text-gray-700"
            >
              {feat}
            </motion.li>
          ))}
        </ul>
        <ul className="list-disc pl-6 space-y-2">
          {featuresRight.map((feat, i) => (
            <motion.li
              key={i}
              custom={i + featuresLeft.length}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="text-gray-700"
            >
              {feat}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-4"
        >
          Live Check Demo
        </motion.h2>

        <p className="text-gray-600 mb-4">
          Try out our demo tool to see how we detect and redact sensitive data. This is part of our mission to make safe AI accessible to everyone.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <motion.textarea
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text such as my email is john.doe@yahoo.com or my phone number is 555-222-1234 to check..."
            className="border p-3 w-full rounded-md"
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
            className="border p-3 w-full rounded-md"
            style={{ minHeight: "120px", flex: 1 }}
            placeholder="Redacted result will appear here..."
          />
        </div>

        <div className="mt-4">
          {error ? (
            <div className="text-red-600 font-semibold">{error}</div>
          ) : result && result.detectors ? (
            <div>
              <div className="font-semibold mb-2">Detected Entities:</div>
              {renderDetectors(result.detectors)}
            </div>
          ) : null}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={checkPrivacy}
          disabled={loading}
          className={`mt-4 flex items-center justify-center gap-2 px-6 py-2 rounded-md text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-700 hover:bg-green-800"
          }`}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
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
          {loading ? "Checking..." : "Check"}
        </motion.button>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Join the Mission</h2>
        <p className="text-gray-600">
          We invite researchers, developers, and organizations to partner with us. Together, we can ensure AI works in service of humanity.
        </p>
        <a
          href="/donate"
          className="inline-block mt-4 px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800"
        >
          Support Our Work
        </a>
      </div>
    </div>
  );
}
