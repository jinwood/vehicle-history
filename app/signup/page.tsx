"use client";
import { userPool } from "@/context/AuthContext";
import useRegister from "@/hooks/useRegister";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { register } = useRegister();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const attributes: CognitoUserAttribute[] = [
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      }),
      new CognitoUserAttribute({
        Name: "password",
        Value: password,
      }),
    ];

    const handleError = (err: any) => {
      console.error(err);
    };

    userPool.signUp(email, password, attributes, [], handleError);
    return router.push("/admin");
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
