import React from "react";
import AuthCard from "../../components/auth/AuthCard";
import FormInput from "../../components/auth/FormInput";
import SubmitButton from "../../components/auth/SubmitButton";

const Register = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <AuthCard
      title="Crear Cuenta"
      footer={{
        text: "¿Ya tienes una cuenta?",
        linkText: "Inicia Sesión",
        linkTo: "/login",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nombre completo"
          type="text"
          id="name"
          placeholder="Juan Pérez"
          required
        />
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
        <FormInput
          label="Confirmar contraseña"
          type="password"
          id="confirmPassword"
          placeholder="••••••••"
          required
        />
        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" required />
            <span className="text-sm text-gray-600">
              Acepto los{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                términos y condiciones
              </a>
            </span>
          </label>
        </div>
        <SubmitButton text="Crear Cuenta" />
      </form>
    </AuthCard>
  );
};

export default Register;
