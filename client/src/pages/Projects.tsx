const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "Personal Portfolio",
      description: "A portfolio to showcase my projects and skills.",
    },
    {
      id: 2,
      name: "E-commerce Store",
      description: "An online store with a modern shopping experience.",
    },
    {
      id: 3,
      name: "Task Manager",
      description: "A tool for managing tasks and productivity.",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-lg">
        Here, you can view and manage all your projects. Each project includes
        tailored settings for your AI prompts.
      </p>

      <div className="mt-8 space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="p-4 card rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Open Project
            </button>
          </div>
        ))}
      </div>

      <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
        + Create New Project
      </button>
    </div>
  );
};

export default Projects;
