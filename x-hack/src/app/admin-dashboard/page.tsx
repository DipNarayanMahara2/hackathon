"use client";

import { useState, useEffect } from "react";
import { db } from "../../../firbase configuration/firebaseconfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import withRoleGuard from "@/components/roleGuard";

const AdminDashboard = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList: any[] = [];
        querySnapshot.forEach((doc) => {
          userList.push({ id: doc.id, ...doc.data() }); // Add document ID for uid reference
        });
        setUsers(userList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Update user role in Firestore
  const handleUpdateRole = async (userId: string, newRole: string) => {
    try {
      const userDocRef = doc(db, "users", userId); // Use the correct uid from Firestore
      await updateDoc(userDocRef, { role: newRole });
      console.log(`User role updated to ${newRole}`);

      // Update role in the local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="admin-dashboard p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6">Manage users and perform administrative tasks.</p>

      <h2 className="text-lg font-bold mb-4">User List</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">
                {user.username || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleUpdateRole(user.id, "admin")}
                  disabled={user.role === "admin"}
                  className={`px-3 py-1 rounded-md ${
                    user.role === "admin"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  Make Admin
                </button>
                <button
                  onClick={() => handleUpdateRole(user.id, "user")}
                  disabled={user.role === "user"}
                  className={`px-3 py-1 rounded-md ml-2 ${
                    user.role === "user"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  Revoke Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRoleGuard(AdminDashboard, ["admin"]);
