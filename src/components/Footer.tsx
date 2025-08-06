
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 mt-12 border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left">
          © 2025 Zero Harm AI, LLC. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="mailto:contact@zeroharmai.com" className="hover:text-blue-600">📧</a>
          <a href="tel:+11234567890" className="hover:text-blue-600">📞</a>
          <a href="#" className="hover:text-blue-600">🔗</a>
        </div>
      </div>
    </footer>
  );
}
