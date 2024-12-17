import React from "react";
import AuthCard from "../../components/auth/AuthCard";
import FormInput from "../../components/auth/FormInput";
import SubmitButton from "../../components/auth/SubmitButton";
import content from "../../data/content.json";

const Register = () => {
  const { register } = content.auth;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthCard title={register.title} footer={register.footer}>
      <form onSubmit={handleSubmit}>
        {register.inputs.map((input) => (
          <FormInput
            key={input.id}
            label={input.label}
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
            required={input.required}
          />
        ))}
        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" required />
            <span className="text-sm text-gray-600">
              {register.terms.text}{" "}
              <a
                href={register.terms.linkTo}
                className="text-blue-600 hover:text-blue-700"
              >
                {register.terms.linkText}
              </a>
            </span>
          </label>
        </div>
        <SubmitButton text={register.submitButton.text} />
      </form>
    </AuthCard>
  );
};

export default Register;
