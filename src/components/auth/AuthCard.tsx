import React from "react";
import { Link } from "react-router-dom";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
  footer: {
    text: string;
    linkText: string;
    linkTo: string;
  };
}

const AuthCard: React.FC<AuthCardProps> = ({ title, children, footer }) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
          {children}
          <p className="mt-4 text-center text-sm text-gray-600">
            {footer.text}{" "}
            <Link
              to={footer.linkTo}
              className="text-blue-600 hover:text-blue-700"
            >
              {footer.linkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
