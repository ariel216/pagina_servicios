import React from "react";
import AuthCard from "../../components/auth/AuthCard";
import FormInput from "../../components/auth/FormInput";
import SubmitButton from "../../components/auth/SubmitButton";

const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <AuthCard
      title="Iniciar Sesión"
      footer={{
        text: "¿No tienes una cuenta?",
        linkText: "Regístrate",
        linkTo: "/register",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Correo electrónico"
          type="email"
          id="email"
          placeholder="tu@email.com"
          required
        />
        <FormInput
          label="Contraseña"
          type="password"
          id="password"
          placeholder="••••••••"
          required
        />
        <div className="mb-6">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <SubmitButton text="Iniciar Sesión" />
      </form>
    </AuthCard>
  );
};

export default Login;
