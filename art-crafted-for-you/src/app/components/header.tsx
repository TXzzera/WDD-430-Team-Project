"use client";
import Image from "next/image";
import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/artcraftedlogo.png"
        alt="Art Crafted For You logo"
        width={200}
        height={200}
        className={styles.logoHeader}
      />

      <input
        type="text"
        placeholder="Type here for search 🔍"
        className={styles.search}
      />
    </header>
  );
}
