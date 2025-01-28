const AboutDescription: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">About Well Prompted</h1>
      <p className="mt-4 text-lg">
        Well Prompted is a powerful tool designed to help developers streamline
        the creation and management of AI prompts. Whether you're requesting
        code snippets, reviewing existing code, optimizing performance, or
        generating documentation, Well Prompted makes the process efficient and
        repeatable.
      </p>

      <div className="mt-8 space-y-6">
        <div className="p-4 card rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-2">
            To empower developers by providing a structured and intuitive
            platform for crafting AI prompts that solve real-world coding
            challenges.
          </p>
        </div>

        <div className="p-4 card rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Why Choose Well Prompted?</h2>
          <p className="mt-2">
            Unlike generic tools, Well Prompted offers project-specific
            customization, pre-built templates for common tasks, and a roadmap
            focused on seamless API integration to enhance your workflow.
          </p>
        </div>

        <div className="p-4 card rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Future Goals</h2>
          <p className="mt-2">
            We're continually innovating to integrate AI capabilities directly
            into the platform, making it even easier for developers to achieve
            their goals without switching between tools.
          </p>
        </div>
      </div>

      <p className="mt-8 text-sm">
        Join us on our journey to redefine how developers interact with AI, one
        prompt at a time.
      </p>
    </div>
  );
};

export default AboutDescription;
