import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  budget: string;
  tags: string[];
  country: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  budget,
  tags,
  country,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-bold">{title}</h2>
        <button className="bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600">
          Envía una propuesta
        </button>
      </div>
      <p className="text-gray-700 mt-2 line-clamp-3">{description}</p>
      <div className="mt-4">
        <div className="flex space-x-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <p>Presupuesto: {budget}</p>
          <p>Ubicación: {country}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
