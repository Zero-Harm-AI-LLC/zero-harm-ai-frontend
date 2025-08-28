import { motion } from "framer-motion";

export default function Donate() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Support Our Mission
      </motion.h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Zero Harm AI is a non-profit dedicated to making artificial intelligence safer, more ethical, and more private. 
        Your support helps us build open-source tools, conduct research, and advocate for responsible AI practices worldwide.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Ways to Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Make a Donation</h3>
            <p className="text-gray-600 mb-4">
              Every contribution helps us expand our tools and outreach.
            </p>
            <a
              href="#donate"
              className="inline-block px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
              Donate Now
            </a>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Join our community of researchers, developers, and advocates.
            </p>
            <a
              href="/contact"
              className="inline-block px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
              Get Involved
            </a>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Collaborate with us to bring safer AI into your organization.
            </p>
            <a
              href="/contact"
              className="inline-block px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Your Support Matters</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          By supporting Zero Harm AI, you help us:
        </p>
        <ul className="list-disc pl-6 text-left max-w-xl mx-auto text-gray-700 space-y-2 mb-6">
          <li>Build and maintain open-source AI safety tools.</li>
          <li>Provide free resources for companies and communities adopting AI.</li>
          <li>Conduct research into reducing AI harms and risks.</li>
          <li>Advocate for policies that prioritize human-centered AI.</li>
        </ul>
        <a
          href="#donate"
          className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800"
        >
          Contribute Today
        </a>
      </section>
    </div>
  );
}
