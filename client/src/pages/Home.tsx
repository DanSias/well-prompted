const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">Welcome to Well Prompted</h1>
      <p className="mt-4 text-lg">
        Streamline your AI prompt creation process and boost your development
        efficiency.
      </p>

      <div className="mt-8 space-y-6">
        <div className="p-4 card rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Organize Projects</h2>
          <p className="mt-2">
            Create and manage projects with tailored settings, including
            language and technology stack preferences.
          </p>
        </div>

        <div className="p-4 card rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Built-in Prompt Templates</h2>
          <p className="mt-2">
            Access ready-to-use templates for common tasks like code requests,
            reviews, optimization, and documentation.
          </p>
        </div>

        <div className="p-4 card rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Copy and Paste Simplicity</h2>
          <p className="mt-2">
            Generate prompts and copy them with a single click to use in your
            favorite AI tools.
          </p>
        </div>
      </div>

      <p className="mt-8 text-sm">
        Future updates will include direct API integration for seamless AI
        interaction.
      </p>
    </div>
  );
};

export default Home;
