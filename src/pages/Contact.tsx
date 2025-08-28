import { useState } from "react";
import { API_ENDPOINTS } from "../config";
import Toast from "../components/Toast";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      await res.json();
      setToast({ type: "success", message: "✅ Your message has been sent!" });

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setToast({ type: "error", message: "❌ Failed to send message:" + err });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <motion.h2
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Partner With Us
      </motion.h2>
      <p className="text-center text-gray-600 mb-8">
        We are a non-profit organization working to make AI safer, more private, and more ethical. 
        Whether you are a researcher, company, or individual, we’d love to collaborate, hear your feedback, or explore partnership opportunities.
      </p>

      <form className="space-y-4" onSubmit={sendContactForm}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-green-500 outline-none transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-green-500 outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          rows={5}
          placeholder="Your Message (e.g., collaboration, feedback, volunteering, partnership)"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-green-500 outline-none transition"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <motion.button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 disabled:opacity-50 flex items-center justify-center gap-2 transition"
          disabled={loading || !name || !email || !message}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
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

      <div className="mt-8 text-center text-gray-700">
        <p>
          You can also reach us at <a href="mailto:contact@zeroharmai.org" className="text-green-700 underline">contact@zeroharmai.org</a>
        </p>
        <p className="mt-2">
          Interested in supporting our mission? <a href="/donate" className="text-green-700 underline">Donate here</a>
        </p>
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