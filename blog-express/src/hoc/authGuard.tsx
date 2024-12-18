"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const authGuard = (WrappedComponent: React.ComponentType) => {
  const AuthGuard: React.FC = (props) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);

      if (!storedToken) {
        router.push("/login");
      }
    }, [router]);

    if (token === null) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthGuard;
};

export default authGuard;
