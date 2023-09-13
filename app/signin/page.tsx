"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = React.useState("foo@bar.com");
  const [password, setPassword] = React.useState("frasers");

  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    console.log("component");
    const { error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    return router.push("/user-home");
  };
  return (
    <div className="bg-gray-900 min-h-fit flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-white mb-8">Sign in</h1>
        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              value="foo@bar.com"
              className="w-full bg-gray-700 text-white p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value="frasers"
              className="w-full bg-gray-700 text-white p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
