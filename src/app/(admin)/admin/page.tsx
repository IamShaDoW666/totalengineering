import React from "react";
import AdminDashboard from "./components/admin-dashboard";
import { auth } from "@/server/auth";
import SignOut from "@/app/_components/client/sign-out";
const AdminPage = async () => {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <>
      <SignOut />
      <p>{JSON.stringify(session)}</p>
      <AdminDashboard />
    </>
  );
};

export default AdminPage;
