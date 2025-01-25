"use client";

import React, { useState, FormEvent, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firbase configuration/firebaseconfig";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Use 'next/navigation' instead of 'next/router'

const LoginSignupForm: React.FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(true); // Toggle between signup/login
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>(""); // Add username field
  const [error, setError] = useState<string>("");
  const [isClient, setIsClient] = useState<boolean>(false); // Add client-side check

  const router = useRouter(); // Using the correct hook from 'next/navigation'

  useEffect(() => {
    setIsClient(true); // This will set to true once the component is mounted on the client side
  }, []);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (isSignup) {
        if (!username.trim()) {
          setError("Username is required.");
          return;
        }

        // Create the user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Save additional user information in Firestore
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          username: username,
          email: email,
        });

        console.log("User signed up and stored successfully!");
      } else {
        // Handle login logic here (e.g., signInWithEmailAndPassword)
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Logged in as:", userCredential.user);

        // Redirect after login
        if (isClient) {
          router.push("/"); // Redirect to home page
        }
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignup ? "Signup" : "Login"}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleFormSubmit}>
          {isSignup && ( // Only show username field for signup
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

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
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => {
                setIsSignup(!isSignup);
                setError(""); // Clear errors when toggling between login/signup
              }}
              className="text-blue-500 underline focus:outline-none"
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
