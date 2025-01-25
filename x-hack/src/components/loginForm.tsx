"use client";

import React, { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firbase configuration/firebaseconfig";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in as:", userCredential.user);

      console.log("Fetching user data from Firestore...");
      let userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

      if (!userDoc.exists()) {
        console.log(
          "User not found in 'users'. Checking 'admins' collection..."
        );
        userDoc = await getDoc(doc(db, "admins", userCredential.user.uid));
      }

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const userRole = userData?.role;

        console.log(`User role fetched: ${userRole}`);
        console.log(`Redirecting user to the ${userRole}-dashboard...`);

        if (userRole === "admin") {
          router.push("/admin-dashboard");
        } else if (userRole === "user") {
          router.push("/user-dashboard");
        } else {
          console.error("Unknown role or missing role field in database.");
          setError(
            "Your account role is not recognized. Please contact support."
          );
        }
      } else {
        setError("User data not found in database.");
      }
    } catch (err: any) {
      console.error("Error during login:", err.message);
      setError("Authentication failed. Check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <button
              onClick={() => router.push("/signupForm")}
              className="text-blue-500 underline focus:outline-none"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
