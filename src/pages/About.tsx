import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About Zero Harm AI
      </motion.h1>

      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
        We democratize AI safety through free, open source tools and consulting services. 
        Like RedHat for enterprise software, we give away the tools and charge for implementation help.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-green-800">🆓 Free & Open Source</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• All AI safety tools are free to use</li>
              <li>• Open source code you can trust</li>
              <li>• No vendor lock-in or hidden costs</li>
              <li>• Community-driven development</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-800">💼 Professional Services</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Implementation consulting</li>
              <li>• Custom safety solutions</li>
              <li>• Training and workshops</li>
              <li>• Ongoing support contracts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why We Exist</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 text-center leading-relaxed">
            Enterprise AI safety solutions cost millions and require huge teams. Small businesses get left behind. 
            We're changing that by making world-class AI safety tools free and accessible to everyone.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Student Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-3">🎓 Sponsorships</h3>
            <p className="text-gray-600">We sponsor AI safety projects and provide mentorship to computer science students.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-3">🏢 Internships</h3>
            <p className="text-gray-600">Real-world experience building open source AI safety tools used by businesses worldwide.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/features"
            className="inline-block px-8 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 font-semibold"
          >
            Try Our Tools
          </a>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 font-semibold"
          >
            Get Consulting
          </a>
          <a
            href="/donate"
            className="inline-block px-8 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 font-semibold"
          >
            Student Program
          </a>
        </div>
      </section>
    </div>
  );
}