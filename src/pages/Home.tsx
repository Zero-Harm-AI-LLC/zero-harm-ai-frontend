import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import architectureDiagram from "../assets/architecture-diagram.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Open Source AI Safety for Small & Medium Businesses
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Zero Harm AI is an open source company empowering small and medium businesses to adopt AI responsibly. 
          We provide free, enterprise-grade AI safety tools and offer consulting services to help you implement ethical AI practices from day one.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Open Source Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Free & Open Source</h3>
            <p>
              All our AI safety tools are open source and free to use. We believe responsible AI should be accessible to every business, regardless of size.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">SMB-Focused Solutions</h3>
            <p>
              Purpose-built for small and medium businesses who need enterprise-grade AI safety without enterprise budgets or complexity.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Student & Engineer Support</h3>
            <p>
              We sponsor student projects, internships, and provide mentorship to help the next generation start their AI journey with safety first.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Who We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Small & Medium Businesses</h3>
            <p>
              Startups, local businesses, and growing companies who want to adopt AI safely without breaking the bank or compromising on ethics.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">AI Engineers & Developers</h3>
            <p>
              Professional developers building AI applications who need proven tools and best practices for responsible AI implementation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Students & New Engineers</h3>
            <p>
              Computer science students and entry-level engineers learning AI development with safety, privacy, and ethics as core principles.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">How We Help</h2>
        <h3 className="text-xl font-semibold mb-4">Open source tools + consulting services for responsible AI</h3>
        <img
          src={architectureDiagram}
          alt="Data Firewall Architecture"
          className="mx-auto rounded-lg shadow-lg w-full h-auto mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => navigate("/features")}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-md text-white bg-green-700 hover:bg-green-800"
          >
            Try Our Tools
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-md text-white bg-blue-700 hover:bg-blue-800"
          >
            Get Consulting
          </button>

          <button
            onClick={() => navigate("/donate")}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
          >
            Student Sponsorship
          </button>
        </motion.div>
      </section>
    </div>
  );
}