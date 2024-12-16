import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isScrolled?: boolean;
  external?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  isScrolled,
  external = false,
}) => {
  const className = `transition-all duration-300 ${
    isScrolled
      ? "text-gray-800 hover:text-blue-700"
      : "text-gray-700 hover:text-blue-600"
  }`;

  if (external) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
