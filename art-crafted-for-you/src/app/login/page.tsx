"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <h2>Login</h2>

      <button
        onClick={() =>
          signIn("credentials", {
            username: "Bruno Teixeira",
            password: "teste123",
            callbackUrl: "/feedback",
          })
        }
      >
        Login
      </button>
    </div>
  );
}
