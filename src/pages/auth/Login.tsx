import React from "react";
import AuthCard from "../../components/auth/AuthCard";
import FormInput from "../../components/auth/FormInput";
import SubmitButton from "../../components/auth/SubmitButton";
import content from "../../data/content.json";

const Login = () => {
  const { login } = content.auth;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthCard title={login.title} footer={login.footer}>
      <form onSubmit={handleSubmit}>
        {login.inputs.map((input) => (
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
          <a
            href={login.forgotPasswordLink}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            {login.forgotPasswordText}
          </a>
        </div>
        <SubmitButton text={login.submitButton.text} />
      </form>
    </AuthCard>
  );
};

export default Login;
