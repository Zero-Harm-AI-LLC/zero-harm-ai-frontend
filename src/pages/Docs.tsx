import { useState } from "react";
import { Copy, Search } from "lucide-react"; // Make sure to install lucide-react

export default function Docs() {
  const tabs = ["Product Brochure", "APIs", "Integration Guides"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Product Brochure":
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">📄 Product Brochure</h2>
            <p className="text-gray-600">
              Learn about our solutions, features, and value proposition.
              Download the latest brochure to see how our products can help
              your business.
            </p>
            <a
              href="/docs/product-brochure.pdf"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              View Brochure
            </a>
          </div>
        );

      case "APIs":
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">🔌 API Reference</h2>
            <p className="text-gray-600">
              Access our API documentation to integrate with our services.
              Includes authentication, endpoints, and sample requests in
              multiple languages.
            </p>

            <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
              <div className="flex justify-between items-center mb-2">
                <span>GET /api/v1/users</span>
                <button onClick={() => handleCopy("GET /api/v1/users")}>
                  <Copy size={16} />
                </button>
              </div>
              <pre>{`curl -X GET "https://api.example.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</pre>
            </div>

            <a
              href="/api-docs"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Full API Docs
            </a>
          </div>
        );

      case "Integration Guides":
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">🔗 Integration Guides</h2>
            <p className="text-gray-600">
              Step-by-step guides and best practices for integrating our
              services into your workflows and applications.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>
                <a
                  href="/integration-guides/react"
                  className="text-blue-600 hover:underline"
                >
                  React App Integration
                </a>
              </li>
              <li>
                <a
                  href="/integration-guides/node"
                  className="text-blue-600 hover:underline"
                >
                  Node.js Backend Integration
                </a>
              </li>
              <li>
                <a
                  href="/integration-guides/python"
                  className="text-blue-600 hover:underline"
                >
                  Python Flask Integration
                </a>
              </li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Developer Documentation</h1>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 mt-4 md:mt-0">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-medium transition-colors ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md">{renderContent()}</div>
    </div>
  );
}
