"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Panel from "../../components/admin/Panel/Panel";

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, [router]);

  return (
    <div>
      <Panel />
    </div>
  );
};

export default Admin;
