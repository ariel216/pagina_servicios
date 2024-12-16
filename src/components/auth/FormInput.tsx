import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  id,
  placeholder,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default FormInput;
