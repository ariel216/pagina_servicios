import React from "react";
import * as Icons from "lucide-react";

interface SocialLink {
  icon: keyof typeof Icons;
  href: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex space-x-4">
      {links.map((link, index) => {
        const Icon = Icons[link.icon];
        return (
          <a
            key={index}
            href={link.href}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
