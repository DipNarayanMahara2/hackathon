import React from "react";
import LoginForm from "@/components/loginForm";

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm /> {/* Using the LoginForm component here */}
    </div>
  );
};

export default LoginPage;
