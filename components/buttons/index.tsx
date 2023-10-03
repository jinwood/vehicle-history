import { useAuth } from "@/context/AuthContext";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export const AuthButtonWidget = () => {
  const { user, signOut, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn(email, password)
      .then(() => {
        console.log("signed in");
      })
      .catch(() => {
        console.log("error signing in");
      });
  };

  if (user) {
    return (
      <button
        onClick={signOut}
        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign out
      </button>
    );
  }

  return (
    <form>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button
        onClick={handleSignIn}
        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in
      </button>
    </form>
  );
};

export const LoginButton = () => {
  const handleSignIn = async () => {
    console.log("login button callbackUrl");
  };

  return (
    <button
      className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleSignIn()}
    >
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link
      href="/register"
      className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <button
      className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleSignOut()}
    >
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return (
    <Link href="/profile" className="text-blue-500 hover:underline">
      Profile
    </Link>
  );
};
