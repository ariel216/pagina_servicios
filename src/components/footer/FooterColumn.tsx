import React from "react";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
