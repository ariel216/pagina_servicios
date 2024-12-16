import React from "react";
import { MapPin } from "lucide-react";

interface TalentCardProps {
  name: string;
  role: string;
  country: string;
  englishLevel: string;
  experience: string;
  skills: string[];
  image: string;
}

const TalentCard: React.FC<TalentCardProps> = ({
  name,
  role,
  country,
  englishLevel,
  experience,
  skills,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{country}</span>
          <span className="mx-2">•</span>
          <span>{englishLevel}</span>
        </div>
        <div className="text-sm text-gray-600">{experience}</div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TalentCard;
