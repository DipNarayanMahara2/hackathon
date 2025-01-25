import React from "react";
import SignupForm from "@/components/SignupForm";

const SignupPage: React.FC = () => {
  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm /> {/* Using the SignupForm component here */}
    </div>
  );
};

export default SignupPage;
