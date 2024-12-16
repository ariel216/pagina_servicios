import React from 'react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: keyof typeof Icons;
  color: string;
  items: string[];
}

const colorVariants = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-600',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, color, items }) => {
  const Icon = Icons[icon];
  const colors = colorVariants[color as keyof typeof colorVariants];

  return (
    <div className={`${colors.bg} p-8 rounded-xl`}>
      <div className="flex items-center mb-6">
        <Icon className={`h-8 w-8 ${colors.text} mr-3`} />
        <h3 className={`text-xl font-semibold ${colors.text}`}>{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <Icon className={`h-5 w-5 mr-3 ${colors.text}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;