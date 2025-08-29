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

      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        We are <span className="font-semibold">Zero Harm AI</span>, an open source company dedicated to making responsible AI accessible to small and medium businesses. 
        Like RedHat's approach to enterprise software, we provide free, open source AI safety tools while offering professional consulting services to help you implement them successfully.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          We believe that responsible AI shouldn't be a luxury available only to tech giants. Our mission is to democratize AI safety by providing 
          enterprise-grade, open source tools that small and medium businesses can use to adopt AI ethically, safely, and profitably. 
          We support the next generation of AI engineers through education, internships, and project sponsorships.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Business Model</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">🆓 Free & Open Source</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• All core AI safety tools are open source</li>
              <li>• Free to use for any business, any size</li>
              <li>• Community-driven development</li>
              <li>• No vendor lock-in</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">💼 Professional Services</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Implementation consulting</li>
              <li>• Custom AI safety solutions</li>
              <li>• Training and workshops</li>
              <li>• Ongoing support contracts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Accessibility:</strong> AI safety tools should be available to every business, not just Fortune 500 companies.</li>
          <li><strong>Transparency:</strong> Open source code builds trust and allows for community verification and improvement.</li>
          <li><strong>Education First:</strong> We believe in teaching responsible AI practices from the beginning of every engineer's journey.</li>
          <li><strong>SMB Focus:</strong> Small and medium businesses are the backbone of innovation - they deserve the best tools too.</li>
          <li><strong>Ethical Business:</strong> We make money through honest consulting work, never by compromising on our open source principles.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Zero Harm AI was founded by technologists who saw how expensive, closed-source AI safety solutions were creating a two-tiered system. 
          Large corporations could afford comprehensive AI safety measures, while smaller businesses were left to navigate AI adoption without proper safeguards. 
          We created this company to level the playing field - providing world-class, open source AI safety tools that any business can use, 
          regardless of their budget or technical resources.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Student & Engineer Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">🎓 Student Sponsorships</h3>
            <p className="text-gray-600">We sponsor computer science students working on AI safety projects, providing mentorship, resources, and sometimes financial support.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">🏢 Internship Program</h3>
            <p className="text-gray-600">Our internship program gives students real-world experience building open source AI safety tools used by businesses worldwide.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our team combines industry veterans with passionate newcomers, all united by the belief that responsible AI should be accessible to everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Founder & CEO</h3>
            <p className="text-gray-600">Former enterprise AI architect with a passion for democratizing AI safety through open source solutions.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Head of Engineering</h3>
            <p className="text-gray-600">Open source veteran leading our technical team and maintaining our core safety libraries.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Education Director</h3>
            <p className="text-gray-600">Manages our student programs, internships, and educational initiatives for responsible AI development.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Whether you're a business looking to adopt AI responsibly, a student interested in AI safety, or a developer wanting to contribute to our open source projects - there's a place for you in our community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
          >
            Get Consulting
          </a>
          <a
            href="/features"
            className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800"
          >
            Try Our Tools
          </a>
          <a
            href="/donate"
            className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700"
          >
            Student Program
          </a>
        </div>
      </section>
    </div>
  );
}