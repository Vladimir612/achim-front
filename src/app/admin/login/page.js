"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "@/app/components/admin/Login/Login";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        router.push("/admin");
      }
    }
  }, [router]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
