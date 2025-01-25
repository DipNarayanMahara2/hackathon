import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../../firbase configuration/firebaseconfig"; // Fix import path if needed
import { doc, getDoc } from "firebase/firestore";

const withRoleGuard = (Component: React.FC, allowedRoles: string[]) => {
  const GuardedComponent = () => {
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
      const fetchUserRole = async () => {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setRole(userData.role);

            // Redirect if user doesn't have the required role
            if (!allowedRoles.includes(userData.role)) {
              router.push("/unauthorized");
            }
          } else {
            router.push("/login");
          }
        } else {
          router.push("/login");
        }
        setLoading(false);
      };

      fetchUserRole();
    }, []);

    if (loading) return <p>Loading...</p>;

    // Render the component if the user has the allowed role
    return role && allowedRoles.includes(role) ? <Component /> : null;
  };

  return GuardedComponent;
};

export default withRoleGuard;
