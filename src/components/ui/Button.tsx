import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50'
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  className = '',
  onClick 
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;