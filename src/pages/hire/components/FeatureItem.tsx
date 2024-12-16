import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
      <Icon className="h-6 w-6 text-blue-600" />
      <span className="text-sm font-medium text-gray-800">{text}</span>
    </div>
  );
};

export default FeatureItem;
