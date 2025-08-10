import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Docs", path: "/docs" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="../assets/privacy-logo.png" // replace with your actual logo path
            alt="Zero Harm AI Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold">Zero Harm AI</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={
                pathname === path
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-400"
              }
            >
              {name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}

