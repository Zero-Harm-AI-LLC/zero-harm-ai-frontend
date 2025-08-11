import architectureDiagram from "../assets/architecture-diagram.png";

export default function Home() {
  return (
    <div className="p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Privacy Firewall for LLMs
        </h1>
        <p className="text-lg text-gray-700">
          A runtime middleware/API that filters sensitive information in prompts and completions before they’re processed or stored — across any LLM provider.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Who We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              AI teams at startups and SMBs
            </h3>
            <p>
              Empower your AI projects with data privacy safeguards to protect customer trust.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Enterprises in healthcare, legal, or customer support
            </h3>
            <p>
              Stay compliant with privacy regulations and safeguard sensitive information.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Developers building AI agents, copilots, or chat interfaces
            </h3>
            <p>
              Integrate a privacy-first approach into your AI workflows from day one.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <h3 className="text-xl font-semibold mb-4">A high-level look at our privacy firewall system</h3>
        <img
          src={architectureDiagram}
          alt="Privacy Firewall Architecture"
          className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
      </section>
    </div>
  );
}
