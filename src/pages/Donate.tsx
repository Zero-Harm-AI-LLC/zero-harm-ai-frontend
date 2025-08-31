import { motion } from "framer-motion";

export default function Donate() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Student Programs & Sponsorships
      </motion.h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        We believe the future of responsible AI starts with education. Our student programs provide hands-on experience, 
        mentorship, and financial support to computer science students who want to make AI safer, more ethical, and more accessible.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Student Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">🏢 Internship Program</h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• 3-6 month paid internships for Undergraduate</li>
              <li>• Work on real open source AI safety tools</li>
              <li>• 1-on-1 mentorship with senior engineers</li>
              <li>• Remote-friendly with flexible schedules</li>
              <li>• Strong emphasis on responsible AI practices</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              Applications reviewed quarterly. Next deadline: March 15th
            </p>
          </div>

          <div className="bg-green-50 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3 text-green-800">🎓 Project Sponsorships</h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Funding for senior projects</li>
              <li>• Research stipends for AI safety studies</li>
              <li>• Conference presentation support</li>
              <li>• Access to our technical advisory board</li>
              <li>• Publication and presentation opportunities</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              Rolling applications. Apply anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-purple-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center text-purple-800">🌟 What Makes Our Programs Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-purple-800 mb-2">Real Impact</h4>
            <p className="text-gray-700">Your work contributes to open source tools used by businesses worldwide, not just academic exercises.</p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-800 mb-2">Industry Mentorship</h4>
            <p className="text-gray-700">Learn from professionals who've built AI systems at scale and understand real-world challenges.</p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-800 mb-2">Ethical Foundation</h4>
            <p className="text-gray-700">Start your AI career with a strong foundation in responsible development and ethical considerations.</p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-800 mb-2">Career Support</h4>
            <p className="text-gray-700">Our alumni network and industry connections help launch your career in responsible AI development.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Application Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3">For Internships</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Currently enrolled computer science student</li>
              <li>Basic programming experience (Python preferred)</li>
              <li>Interest in AI safety and ethical technology</li>
              <li>Strong communication skills</li>
              <li>Available for 15+ hours per week</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3">For Project Sponsorships</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Undergraduate or graduate student</li>
              <li>Project focused on AI safety, ethics, or privacy</li>
              <li>Clear timeline and deliverables</li>
              <li>Faculty advisor support (recommended)</li>
              <li>Willingness to open source results</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">How We Fund These Programs</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
          Our student programs are funded through our consulting revenue and community donations. 
          Every dollar goes directly to student stipends, project funding, and program operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">💼 Consulting Revenue</h3>
            <p className="text-gray-600">
              70% of our consulting profits fund student programs and open source development.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">🤝 Corporate Sponsors</h3>
            <p className="text-gray-600">
              Companies that value responsible AI development sponsor our educational initiatives.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">❤️ Community Donations</h3>
            <p className="text-gray-600">
              Individual contributors who believe in the importance of ethical AI education.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Apply?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Whether you're a student ready to dive into responsible AI development or someone who wants to support the next generation of ethical AI engineers, we'd love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact?type=student"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
          >
            Apply for Programs
          </a>
          <a
            href="/contact?type=sponsor"
            className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800"
          >
            Become a Sponsor
          </a>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700"
          >
            Ask Questions
          </a>
        </div>
      </section>
    </div>
  );
}