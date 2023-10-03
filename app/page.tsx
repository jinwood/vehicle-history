"use client";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import styles from "./page.module.css";
import awsExports from "@/app/aws-exports";
import { AuthProvider } from "@/context/AuthContext";
import { AuthButtonWidget } from "@/components/buttons";

Amplify.configure({ ...awsExports, ssr: true });

export default function Home() {
  return (
    <Authenticator>
      <AuthProvider>
        <main className={styles.main}>
          <AuthButtonWidget />
        </main>
      </AuthProvider>
    </Authenticator>
  );
}
