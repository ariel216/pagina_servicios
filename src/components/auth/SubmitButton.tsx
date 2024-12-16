import React from "react";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
