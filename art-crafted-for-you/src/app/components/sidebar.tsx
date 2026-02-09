"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image
        src="/logowithouttext.png"
        alt="Art Crafted For You logo"
        width={140}
        height={140}
      />

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/artists">Artists</Link>
        <Link href="/arts">Arts</Link>
        <Link href="/feedback">Feedback</Link>
        <Link href="/share">Share</Link>
      </nav>
    </aside>
  );
}
