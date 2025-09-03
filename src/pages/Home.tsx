import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import architectureDiagram from "../assets/architecture-diagram.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          AI Safety Tools for Small Businesses
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Open source AI safety tools built for small and medium businesses. 
          Free to use, enterprise-grade protection, with consulting available.
        </p>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">100% Free & Open Source</h3>
            <p>Enterprise-grade AI safety without the enterprise budget.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Built for SMBs</h3>
            <p>Simple tools designed for businesses that need results, not complexity.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Student Support</h3>
            <p>Sponsoring the next generation of ethical AI developers.</p>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6">Data Firewall Architecture</h2>
        <img
          src={architectureDiagram}
          alt="Data Firewall Architecture"
          className="mx-auto rounded-lg shadow-lg w-full h-auto mb-6"
        />
      </section>

      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => navigate("/features")}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-md text-white bg-green-700 hover:bg-green-800 font-semibold"
          >
            Try Our Tools
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-md text-white bg-blue-700 hover:bg-blue-800 font-semibold"
          >
            Get Consulting
          </button>
        </motion.div>
      </section>
    </div>
  );
}