import React from "react";
import TalentCard from "./TalentCard";

const talents = [
  {
    name: "Henry Villavicencio",
    role: "Fullstack Dev",
    country: "Ecuador",
    englishLevel: "Inglés fluido",
    experience: "+3 años de experiencia",
    skills: ["Javascript", "ReactJS", "Typescript"],
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Raquel Martins",
    role: "Dev React Sr",
    country: "Brasil",
    englishLevel: "Inglés fluido",
    experience: "+3 años de experiencia",
    skills: ["Flutter", "ReactJS", "Angular"],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Alex Souza",
    role: "Backend Dev Ssr(Node.js)",
    country: "Brasil",
    englishLevel: "Inglés fluido",
    experience: "+3 años de experiencia",
    skills: ["NodeJS"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

const TalentGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {talents.map((talent, index) => (
        <TalentCard key={index} {...talent} />
      ))}
    </div>
  );
};

export default TalentGrid;
