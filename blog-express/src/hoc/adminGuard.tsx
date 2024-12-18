"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const adminGuard = (WrappedComponent: React.ComponentType) => {
  const AdminGuard: React.FC = (props) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }, []);

    useEffect(() => {
      if (token === null) return;

      if (!token) {
        router.push("/login");
      } else {
        const decodedUser = jwtDecode(token) as { role: "Admin" | "User" };
        if (decodedUser.role !== "Admin") {
          router.push("/");
        }
      }
    }, [router, token]);

    if (token === null) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AdminGuard;
};

export default adminGuard;
