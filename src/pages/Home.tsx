import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import architectureDiagram from "../assets/architecture-diagram.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Building Safer AI for Everyone
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We are a non-profit organization dedicated to helping companies and communities use AI responsibly. 
          Our mission is to reduce harm, safeguard privacy, and ensure AI adoption benefits society as a whole.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Vision & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Trust & Transparency</h3>
            <p>
              We believe in open, transparent systems that give organizations confidence in how AI handles data.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Privacy & Protection</h3>
            <p>
              Our work ensures sensitive information is safeguarded, helping organizations stay compliant and ethical.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Collaboration & Community</h3>
            <p>
              We bring together developers, companies, and researchers to build a safer AI ecosystem together.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Impact in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p>
              Supporting hospitals and clinics in protecting patient data when adopting AI tools.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>
              Helping schools and universities integrate AI responsibly into teaching and research.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Small Businesses</h3>
            <p>
              Enabling startups and SMBs to innovate with AI while maintaining customer trust and security.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">How We Help</h2>
        <h3 className="text-xl font-semibold mb-4">A look at our open tools for safer AI</h3>
        <img
          src={architectureDiagram}
          alt="Data Firewall Architecture"
          className="mx-auto rounded-lg shadow-lg w-full h-auto mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-md text-white bg-green-700 hover:bg-green-800"
          >
            Partner With Us
          </button>

          <button
            onClick={() => navigate("/features")}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-md text-white bg-green-700 hover:bg-green-800"
          >
            Learn More
          </button>
        </motion.div>
      </section>
    </div>
  );
}
