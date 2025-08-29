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
    "🆓 Free & open source - no licensing fees or vendor lock-in",
    "🏢 Built specifically for small & medium businesses",
    "🔍 Advanced PII detection using NER, Regex, and ML approaches",
    "⚡ Real-time processing with instant feedback",
    "🛡️ Privacy-first design - your data never leaves your infrastructure",
  ];

  const featuresRight = [
    "⚙️ Configurable rules tailored to your business needs",
    "📊 Compliance reporting for GDPR, CCPA, and industry standards",
    "🔌 Easy integration with REST APIs and Python SDKs",
    "🐳 Docker deployment - runs anywhere you need it",
    "👥 Community support and enterprise consulting available",
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
        Open Source AI Safety Tools for SMBs
      </motion.h1>

      <p className="text-gray-700 max-w-4xl mb-8">
        Our enterprise-grade AI safety tools are completely free and open source. We believe that responsible AI shouldn't be a privilege for large corporations only. 
        Small and medium businesses deserve the same level of protection and ethical AI practices. Download our tools, use them freely, and get professional consulting when you need implementation help.
      </p>

      <div className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">💡 Why Open Source?</h3>
        <p className="text-gray-700">
          Unlike proprietary solutions that cost thousands per month, our open source approach means you can start using enterprise-grade AI safety tools today, 
          for free. You can inspect the code, contribute improvements, and never worry about vendor lock-in or surprise pricing changes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ul className="space-y-3">
          {featuresLeft.map((feat, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="text-gray-700 flex items-start"
            >
              <span className="mr-2">•</span>
              <span>{feat}</span>
            </motion.li>
          ))}
        </ul>
        <ul className="space-y-3">
          {featuresRight.map((feat, i) => (
            <motion.li
              key={i}
              custom={i + featuresLeft.length}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="text-gray-700 flex items-start"
            >
              <span className="mr-2">•</span>
              <span>{feat}</span>
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
          Live Demo - Try It Now
        </motion.h2>

        <p className="text-gray-600 mb-4">
          Test our PII detection tool right here in your browser. This is the same engine that powers our open source libraries - 
          see how it can protect your business from accidentally exposing sensitive customer data to AI systems.
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
          {loading ? "Checking..." : "Check for PII"}
        </motion.button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-800">🚀 Ready to Get Started?</h3>
          <p className="text-gray-700 mb-4">
            Download our open source tools and start protecting your AI applications today. 
            No registration required, no limits, no surprises.
          </p>
          <a
            href="/docs"
            className="inline-block px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          >
            View Documentation
          </a>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">🤝 Need Implementation Help?</h3>
          <p className="text-gray-700 mb-4">
            Our consulting team helps SMBs implement responsible AI practices. 
            From strategy to deployment, we've got you covered.
          </p>
          <a
            href="/contact"
            className="inline-block px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            Get Consulting
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Supporting the Next Generation</h2>
        <p className="text-gray-600 mb-4">
          We believe in teaching responsible AI from the start. That's why we sponsor student projects, 
          offer internships, and provide mentorship to computer science students learning AI development.
        </p>
        <a
          href="/donate"
          className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700"
        >
          Learn About Student Programs
        </a>
      </div>
    </div>
  );
}