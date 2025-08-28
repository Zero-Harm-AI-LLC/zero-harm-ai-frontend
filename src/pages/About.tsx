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
        About Us
      </motion.h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        We are <span className="font-semibold">Zero Harm AI</span>, a non-profit organization on a mission to ensure that artificial intelligence is used responsibly, ethically, and safely. 
        Our vision is a world where AI empowers people without compromising privacy, trust, or human values.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          We help organizations adopt AI in ways that protect individuals and society. 
          By building open-source tools, offering guidance, and fostering collaboration, 
          we aim to minimize harm and maximize the benefits of AI technology.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Transparency:</strong> Open tools and processes that foster trust.</li>
          <li><strong>Privacy:</strong> Safeguarding sensitive data is at the core of our work.</li>
          <li><strong>Collaboration:</strong> Partnering with organizations, developers, and researchers worldwide.</li>
          <li><strong>Impact:</strong> Building solutions that protect people and communities first.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Zero Harm AI was founded by a group of technologists and researchers who recognized the urgent need for safer AI practices. 
          While AI holds incredible potential, it also poses real risks to privacy, security, and fairness. 
          We created this non-profit to provide practical solutions that organizations of all sizes can use to mitigate these risks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our team is made up of engineers, researchers, and advocates passionate about ethical AI. 
          Together, we work across disciplines to create impactful solutions for safer technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Founder & Director</h3>
            <p className="text-gray-600">Visionary leader with background in AI safety and ethics.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Lead Engineer</h3>
            <p className="text-gray-600">Developer focused on building open-source tools for AI security.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Community Manager</h3>
            <p className="text-gray-600">Connecting researchers, volunteers, and partners worldwide.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Join us in our mission to build safer AI. Whether through volunteering, contributing code, donating, or partnering with us — your support helps us make a difference.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
