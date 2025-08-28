
export default function Footer() {
  return (
    <footer className="bg-green-50 text-sm text-gray-700 mt-12 border-t border-green-200">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="font-semibold text-green-800">Zero Harm AI</p>
          <p className="text-xs max-w-xs text-gray-600">
            A non-profit organization dedicated to helping companies adopt AI in a secure, ethical, and less harmful way.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
          <a href="/about" className="text-green-700 hover:text-green-900 transition">About Us</a>
          <a href="/features" className="text-green-700 hover:text-green-900 transition">Our Approach</a>
          <a href="/donate" className="text-green-700 hover:text-green-900 transition">Support</a>
          <a href="/contact" className="text-green-700 hover:text-green-900 transition">Contact</a>
        </div>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="mailto:contact@zeroharmai.org" className="text-green-700 hover:text-green-900 transition">📧</a>
          <a href="tel:+11234567890" className="text-green-700 hover:text-green-900 transition">📞</a>
          <a href="#" className="text-green-700 hover:text-green-900 transition">🔗</a>
        </div>
      </div>
    </footer>
  );
}
