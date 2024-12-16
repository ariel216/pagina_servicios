import React from "react";
import { CheckCircle, Award, User2, MessageSquare } from "lucide-react";
import FeatureItem from "./FeatureItem";

const features = [
  {
    icon: CheckCircle,
    text: "Profesionales con +3 años de experiencia",
  },
  {
    icon: Award,
    text: "Habilidades técnicas certificadas",
  },
  {
    icon: User2,
    text: "Habilidades soft verificadas",
  },
  {
    icon: MessageSquare,
    text: "Nivel mínimo de inglés B2",
  },
];

const TalentFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>
  );
};

export default TalentFeatures;
