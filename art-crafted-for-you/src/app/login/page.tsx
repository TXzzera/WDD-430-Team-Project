"use client";
import { signIn } from "next-auth/react";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign In</h2>
      <p className={styles.description}>
        Use your GitHub account to access the platform.
      </p>
      
      <button
        className={styles.loginButton}
        onClick={() => signIn("github", { callbackUrl: "/feedback" })}
      >
        Continue with GitHub
      </button>
    </div>
  );
}