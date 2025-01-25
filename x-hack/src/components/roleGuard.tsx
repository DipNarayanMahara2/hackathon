import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../firbase configuration/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";

const withRoleGuard = (
  Component: React.ComponentType,
  allowedRoles: string[]
) => {
  const RoleGuard = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            try {
              const token = await user.getIdTokenResult();
              const role = token.claims.role as string; // Explicitly cast `role` as a string

              if (!allowedRoles.includes(role)) {
                router.push("/unauthorized"); // Redirect to unauthorized if not allowed
              }
            } catch (error) {
              console.error("Error fetching token claims:", error);
              router.push("/unauthorized");
            }
          } else {
            router.push("/login"); // Redirect to login if not authenticated
          }
        });
      };

      checkAuth();
    }, []);

    return <Component {...props} />;
  };

  return RoleGuard;
};

export default withRoleGuard;
