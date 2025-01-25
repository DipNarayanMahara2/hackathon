"use client";

import React, { useState } from "react";
import { db } from "../../../firbase configuration/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

interface FormData {
  name: string;
  category: string;
  description: string;
}

const WasteSubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    category: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccessMessage("");

    try {
      const docRef = await addDoc(
        collection(db, "waste-submissions"),
        formData
      );
      console.log("Document written with ID: ", docRef.id);
      setSuccessMessage("Waste details submitted successfully!");
      setFormData({ name: "", category: "", description: "" });
    } catch (err: unknown) {
      console.error("Error adding document: ", err);
      setError("Failed to submit waste details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Submit Waste Details</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}

      {/* Waste Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
          Enter Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter waste name"
          required
        />
      </div>

      {/* Waste Category Select */}
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block font-medium text-gray-700 mb-2"
        >
          Select Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">Select a category</option>
          <option value="plastic">Plastic</option>
          <option value="metal">Metal</option>
          <option value="paper">Paper</option>
        </select>
      </div>

      {/* Waste Description Input */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter description"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-label="Submit"
        className={`bg-blue-500 text-white rounded px-4 py-2 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default WasteSubmissionForm;
