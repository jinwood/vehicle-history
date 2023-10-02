import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  const handleSignIn = async () => {
    const callbackUrl = `https://localhost:3000/api/auth/callback/cognito`;
    console.log("login button callbackUrl", callbackUrl);
    await signIn("cognito", { callbackUrl });
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
