import React from 'react';
import * as Icons from 'lucide-react';

interface FeatureItemProps {
  icon: keyof typeof Icons;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  const Icon = Icons[icon];
  
  return (
    <span className="flex items-center text-sm text-gray-600">
      <Icon className="h-4 w-4 mr-2" />
      {text}
    </span>
  );
};

export default FeatureItem;