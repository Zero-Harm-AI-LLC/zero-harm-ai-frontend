import { useState } from "react";
import { Search } from "lucide-react";
import Toast from "../components/Toast";

export default function Docs() {
    const tabs = ["Product Brochure", "APIs", "Integration Guides", "Resources"];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setToast({ type: "success", message: "Copied to clipboard!" });
    };

    const handleToastClick = () => {
        setToast({ type: "success", message: "Document is in working progress" });
    };

    const renderContent = () => {
        switch (activeTab) {
            case "Product Brochure":
                return (
                    <div className="p-4 md:p-6 space-y-4">
                        <h2 className="text-xl font-semibold">📋 Open Source AI Safety Solutions</h2>
                        <p className="text-gray-600">
                            Learn about our free, open source AI safety tools designed specifically for small and medium businesses. 
                            Download our product overview to see how we make enterprise-grade AI safety accessible to everyone.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                            <h3 className="font-semibold text-blue-800 mb-2">🆓 100% Free & Open Source</h3>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• No licensing fees or vendor lock-in</li>
                                <li>• Full source code available on GitHub</li>
                                <li>• Community-driven development</li>
                                <li>• Professional consulting available</li>
                            </ul>
                        </div>
                        <button
                            onClick={handleToastClick}
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
                        >
                            Download Product Overview
                        </button>
                    </div>
                );

            case "APIs":
                return (
                    <div className="p-4 md:p-6 space-y-4">
                        <h2 className="text-xl font-semibold">🐍 Free Python Library for SMBs</h2>
                        <p className="text-gray-600">
                            Our open source Python library provides enterprise-grade AI safety tools that small and medium businesses 
                            can use for free. No network requests, no data sharing - everything runs locally on your infrastructure.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg mb-4">
                            <h3 className="font-semibold text-green-800 mb-2">🏢 Perfect for SMBs</h3>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Zero licensing costs</li>
                                <li>• Runs on your own servers</li>
                                <li>• No external API dependencies</li>
                                <li>• Easy Docker deployment</li>
                            </ul>
                        </div>
                        <button
                            onClick={handleToastClick}
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
                        >
                            Full Documentation & GitHub
                        </button>
                        <div className="mt-4 text-sm text-gray-600">
                            <p>💡 Need help implementing? Our consulting team specializes in helping SMBs deploy these tools successfully.</p>
                        </div>
                    </div>
                );

            case "Integration Guides":
                return (
                    <div className="p-4 md:p-6 space-y-4">
                        <h2 className="text-xl font-semibold">🔗 SMB Integration Guides</h2>
                        <p className="text-gray-600">
                            Step-by-step guides written specifically for small and medium businesses. 
                            These tutorials assume limited DevOps resources and focus on simple, reliable deployments.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                            <h3 className="font-semibold text-yellow-800 mb-2">🚀 Quick Start Options</h3>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Docker one-click deployment</li>
                                <li>• Cloud marketplace integrations</li>
                                <li>• Starter templates for common frameworks</li>
                                <li>• Budget-friendly hosting recommendations</li>
                            </ul>
                        </div>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>
                                <button
                                    onClick={handleToastClick}
                                    className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                >
                                    Small Business React App Integration
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleToastClick}
                                    className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                >
                                    Budget-Friendly Node.js Deployment
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleToastClick}
                                    className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                >
                                    Docker Container Setup for SMBs
                                </button>
                            </li>
                        </ul>
                        <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded">
                            <p>💼 <strong>Need Professional Help?</strong> Our consulting team offers implementation services starting at $2,500 for complete setup and training.</p>
                        </div>
                    </div>
                );

            case "Resources":
                return (
                    <div className="p-4 md:p-6 space-y-4">
                        <h2 className="text-xl font-semibold">📚 Learning Resources</h2>
                        <p className="text-gray-600">
                            Educational materials, research papers, and external resources for learning about responsible AI development. 
                            Perfect for students, new engineers, and SMB teams getting started with AI safety.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-purple-800 mb-2">🎓 For Students & New Engineers</h3>
                                <ul className="list-disc pl-5 text-blue-600 space-y-1 text-sm">
                                    <li>
                                        <button
                                            onClick={handleToastClick}
                                            className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                        >
                                            AI Safety 101: A Beginner's Guide
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleToastClick}
                                            className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                        >
                                            Ethical AI Development Checklist
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleToastClick}
                                            className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                        >
                                            Sample Student Projects & Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-green-800 mb-2">🏢 For Small & Medium Businesses</h3>
                                <ul className="list-disc pl-5 text-blue-600 space-y-1 text-sm">
                                    <li>
                                        <button
                                            onClick={handleToastClick}
                                            className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                        >
                                            SMB Guide to Responsible AI Adoption
                                        </button>                                        
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleToastClick}
                                            className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                        >
                                            AI Safety on a Startup Budget
                                        </button>                                             
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleToastClick}
                                            className="text-blue-600 hover:underline active:text-blue-800 transition-colors"
                                        >
                                            GDPR/CCPA Compliance for AI Systems
                                        </button>                                            
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-2">🔬 Research & Technical Papers</h3>
                                <ul className="list-disc pl-5 text-blue-600 space-y-1 text-sm">
                                    <li>
                                        <a href="https://arxiv.org/abs/2309.01029" target="_blank" rel="noopener noreferrer" className="hover:underline active:text-blue-800 transition-colors">
                                            Explainability for Large Language Models: A Survey
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://huggingface.co/blog/JMJM/giskard-llm-testing-and-debugging-hf" target="_blank" rel="noopener noreferrer" className="hover:underline active:text-blue-800 transition-colors">
                                            Introducing the Giskard Bot: Enhancing LLM Testing & Debugging on Hugging Face
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/watch?v=9haIOplEIGM" target="_blank" rel="noopener noreferrer" className="hover:underline active:text-blue-800 transition-colors">
                                            Explainable AI explained!
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                            <p>📧 <strong>Stay Updated:</strong> Subscribe to our newsletter for the latest research, student opportunities, and SMB-focused AI safety resources.</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Open Source AI Safety Documentation</h1>
                    <p className="text-gray-600 mt-2">Free tools and resources for responsible AI development</p>
                </div>
                <div className="relative w-full lg:w-72">
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                    />
                    <input
                        type="text"
                        placeholder="Search docs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                    />
                </div>
            </div>
            
            {/* Mobile-optimized tabs */}
            <div className="flex overflow-x-auto border-b border-gray-200 mb-6 -mx-4 px-4 md:mx-0 md:px-0">
                <div className="flex min-w-max">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 md:px-6 py-2 font-medium transition-colors whitespace-nowrap text-sm md:text-base ${
                                activeTab === tab
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-gray-500 hover:text-blue-500 active:text-blue-600"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {renderContent()}
            </div>
            
            {/* Add footer section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">🎓 Student Resources</h3>
                    <p className="text-gray-700 text-sm mb-3">
                        Learning AI safety? Check out our internship program and project sponsorship opportunities.
                    </p>
                    <a href="/contact" className="text-blue-600 hover:underline text-sm font-medium">
                        View Student Programs →
                    </a>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">💼 Need Implementation Help?</h3>
                    <p className="text-gray-700 text-sm mb-3">
                        Our consulting team helps SMBs deploy these tools successfully with training and ongoing support.
                    </p>
                    <a href="/contact" className="text-green-600 hover:underline text-sm font-medium">
                        Get Consulting Quote →
                    </a>
                </div>
            </div>
            
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