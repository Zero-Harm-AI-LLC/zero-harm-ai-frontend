import { useState } from "react";
import { Copy, Search } from "lucide-react";
import Toast from "../components/Toast";

export default function Docs() {
    const tabs = ["Product Brochure", "APIs", "Integration Guides", "Resources"];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    const handleToastClick = () => {
        setToast({ type: "success", message: "Document is in working progress" });
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
                        <button
                            onClick={handleToastClick}
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            View Brochure
                        </button>
                    </div>
                );

            case "APIs":
                return (
                    <div className="p-6 space-y-4">
                        <h2 className="text-xl font-semibold">🐍 Python Library API</h2>
                        <p className="text-gray-600">
                            Our Python library provides simple, native functions you can call
                            directly from your code. No network requests required — all processing
                            happens locally.
                        </p>
                        {/* Installation */}
                        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
                            <div className="flex justify-between items-center mb-2">
                                <span>Install the Library</span>
                                <button onClick={() => handleCopy("pip install zeroharmai")}>📋</button>
                            </div>
                            <pre>{`pip install zeroharmai`}</pre>
                        </div>
                        {/* Example: detect_pii */}
                        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
                            <div className="flex justify-between items-center mb-2">
                                <span>Detect PII in a String</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`from zeroharmai import detect_pii

text = "Call me at 555-123-4567 or email john@example.com"
results = detect_pii(text)

print(results)`)
                                    }
                                >
                                    📋
                                </button>
                            </div>
                            <pre>{`from zeroharmai import detect_pii

text = "Call me at 555-123-4567 or email john@example.com"
results = detect_pii(text)

print(results)`}</pre>
                        </div>
                        {/* Example: mask_pii */}
                        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
                            <div className="flex justify-between items-center mb-2">
                                <span>Mask PII in a String</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`from zeroharmai import mask_pii

text = "SSN: 123-45-6789"
masked = mask_pii(text)

print(masked)`)
                                    }
                                >
                                    📋
                                </button>
                            </div>
                            <pre>{`from zeroharmai import mask_pii

text = "SSN: 123-45-6789"
masked = mask_pii(text)

print(masked)`}</pre>
                        </div>
                        {/* Example: redact_pii */}
                        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
                            <div className="flex justify-between items-center mb-2">
                                <span>Redact PII in a String</span>
                                <button
                                    onClick={() =>
                                        handleCopy(`from zeroharmai import redact_pii

text = "Jane Doe, jane@example.com"
redacted = redact_pii(text)

print(redacted)`)
                                    }
                                >
                                    📋
                                </button>
                            </div>
                            <pre>{`from zeroharmai import redact_pii

text = "Jane Doe, jane@example.com"
redacted = redact_pii(text)

print(redacted)`}</pre>
                        </div>
                        <button
                            onClick={handleToastClick}
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Full Python Library Docs
                        </button>
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
                                <button
                                    onClick={handleToastClick}
                                    className="text-blue-600 hover:underline"
                                >
                                    React App Integration
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleToastClick}
                                    className="text-blue-600 hover:underline"
                                >
                                    Node.js Backend Integration
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleToastClick}
                                    className="text-blue-600 hover:underline"
                                >
                                    Python Flask Integration
                                </button>
                            </li>
                        </ul>
                    </div>
                );

            case "Resources":
                return (
                    <div className="p-6 space-y-4">
                        <h2 className="text-xl font-semibold">📚 Resources</h2>
                        <p className="text-gray-600">
                            External references, tools, and useful documentation for deeper learning.
                        </p>
                        <ul className="list-disc pl-5 text-blue-600 space-y-2">
                            <li>
                                <a href="https://example.com/resource1" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Resource Link 1
                                </a>
                            </li>
                            <li>
                                <a href="https://example.com/resource2" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Resource Link 2
                                </a>
                            </li>
                            <li>
                                <a href="https://example.com/resource3" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Resource Link 3
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
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Developer Documentation</h1>
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
            <div className="bg-white rounded-xl shadow-md">{renderContent()}</div>
            {toast && (
                <Toast
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}
