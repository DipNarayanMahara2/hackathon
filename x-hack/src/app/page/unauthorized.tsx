"use client";

import { useRouter } from "next/navigation";

const Unauthorized = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Unauthorized Access</h1>
        <p className="mb-4">
          You do not have the required permissions to view this page.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
