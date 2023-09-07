"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import logout from "@/firebase/auth/logout";
function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <p>You are logged in as {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Page;
