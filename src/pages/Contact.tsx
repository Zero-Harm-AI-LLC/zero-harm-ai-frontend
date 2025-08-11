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
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h2>

      <form className="space-y-4" onSubmit={sendContactForm}>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          rows={5}
          placeholder="Message"
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <motion.button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2 transition"
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
