// pages/admin-dashboard.tsx
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
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList: any[] = [];
      querySnapshot.forEach((doc) => {
        userList.push(doc.data());
      });
      setUsers(userList);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Update user role in Firestore
  const handleUpdateRole = async (userId: string, newRole: string) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, { role: newRole });
      console.log(`User role updated to ${newRole}`);
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Welcome to the Admin Dashboard</h1>
      <p>Manage users and perform administrative tasks</p>

      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => handleUpdateRole(user.uid, "admin")}
                  disabled={user.role === "admin"}
                >
                  Make Admin
                </button>
                <button
                  onClick={() => handleUpdateRole(user.uid, "user")}
                  disabled={user.role === "user"}
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
