"use client";
import styles from "./page.module.css";
import {
  LoginButton,
  RegisterButton,
  LogoutButton,
  ProfileButton,
} from "@/components/buttons";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
    </main>
  );
}
