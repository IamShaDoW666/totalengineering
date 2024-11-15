import React from "react";
import AdminDashboard from "./components/admin-dashboard";
import { auth } from "@/server/auth";

const AdminPage = async () => {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;
  return (
    <>
      <AdminDashboard />
    </>
  );
};

export default AdminPage;
