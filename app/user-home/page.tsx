"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();

  return (
    <>
      <p>You are logged in as </p>
      <button>Logout</button>
    </>
  );
}

export default Page;
