// /pages/user-dashboard.tsx
import React, { useState } from "react";
import { db } from "../../../firbase configuration/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import withRoleGuard from "@/components/roleGuard";

const UserDashboard: React.FC = () => {
  const [wasteType, setWasteType] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [condition, setCondition] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!wasteType || quantity <= 0) {
      setError("Please fill in all fields correctly.");
      return;
    }

    try {
      await addDoc(collection(db, "wasteMaterials"), {
        wasteType,
        quantity,
        condition,
        userId: "currentUserId", // Replace with actual user ID from Firebase
        timestamp: new Date(),
      });

      setSuccess("Your waste has been successfully listed for sale.");
      setWasteType("");
      setQuantity(0);
      setCondition("");
    } catch (err) {
      setError("There was an error processing your request.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Waste Management Dashboard
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type of Waste
          </label>
          <select
            value={wasteType}
            onChange={(e) => setWasteType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select waste type</option>
            <option value="Plastic">Plastic</option>
            <option value="Paper">Paper</option>
            <option value="Glass">Glass</option>
            <option value="Metal">Metal</option>
            <option value="Organic">Organic</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Quantity (kg)
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Condition
          </label>
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder="Optional - E.g., Good, Damaged, etc."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          List Waste for Sale
        </button>
      </form>
    </div>
  );
};

export default withRoleGuard(UserDashboard, ["user"]);
