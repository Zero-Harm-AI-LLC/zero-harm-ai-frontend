import { useState } from "react";
import { API_ENDPOINTS } from "../config";
import Toast from "../components/Toast";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function sendContactForm(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch(API_ENDPOINTS.CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, inquiryType, message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      await res.json();
      setToast({ type: "success", message: "✅ Your message has been sent!" });

      setName("");
      setEmail("");
      setCompany("");
      setInquiryType("");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setToast({ type: "error", message: "❌ Failed to send message: " + err });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.h1
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Get Started with AI Safety
      </motion.h1>
      
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Whether you're a small business looking to adopt AI safely, a student interested in AI safety, 
        or a developer wanting to contribute to our open source projects - we'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-blue-800">💼 Business Consulting</h3>
          <p className="text-sm text-gray-700">
            Professional implementation services for SMBs wanting to adopt AI responsibly
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-green-800">🎓 Student Programs</h3>
          <p className="text-sm text-gray-700">
            Internships, project sponsorships, and mentorship for computer science students
          </p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-purple-800">🤝 Open Source</h3>
          <p className="text-sm text-gray-700">
            Contribute to our projects, report issues, or suggest new features
          </p>
        </div>
      </div>

      <form className="space-y-4 max-w-xl mx-auto" onSubmit={sendContactForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <input
          type="text"
          placeholder="Company/Organization (optional)"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label htmlFor="inquiryType" className="sr-only">
          Inquiry Type *
        </label>
        <select
          id="inquiryType"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          required
        >
          <option value="">Select Inquiry Type *</option>
          <option value="consulting">Business Consulting & Implementation</option>
          <option value="student">Student Program / Internship</option>
          <option value="opensource">Open Source Contribution</option>
          <option value="partnership">Partnership / Collaboration</option>
          <option value="support">Technical Support</option>
          <option value="other">Other</option>
        </select>

        <textarea
          rows={6}
          placeholder="Tell us about your project, needs, or how we can help... *"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <motion.button
          type="submit"
          className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 disabled:opacity-50 flex items-center justify-center gap-2 transition"
          disabled={loading || !name || !email || !inquiryType || !message}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? (
            <motion.div
              className="border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"
            />
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>

      <div className="mt-12 text-center space-y-4">
        <div className="text-gray-700">
          <p className="font-semibold">Direct Contact</p>
          <p>
            Email us at <a href="mailto:contact@zeroharmai.org" className="text-blue-700 underline">contact@zeroharmai.org</a>
          </p>
        </div>
        
        <div className="text-gray-700">
          <p className="font-semibold">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="/features" className="text-blue-700 underline">Try Our Tools</a>
            <a href="/docs" className="text-blue-700 underline">Documentation</a>
            <a href="/donate" className="text-blue-700 underline">Student Programs</a>
            <a href="https://github.com/zeroharmai" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 className="font-semibold text-gray-800 mb-2">Our Commitment</h3>
          <p className="text-sm text-gray-600">
            We respond to all business inquiries within 24 hours. Student program applications are reviewed monthly. 
            Open source contributions and technical questions get priority in our community forums.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}