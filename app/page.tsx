"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/signin");
  }, [router]);
  return (
    <main className={styles.main}>
      <p>no</p>
    </main>
  );
}
