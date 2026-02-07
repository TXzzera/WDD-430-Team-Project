import Image from "next/image";
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
        <a href="#">Home</a>
        <a href="#">Artists</a>
        <a href="#">Arts</a>
        <a href="#">Feedback</a>
        <a href="#">Share</a>
      </nav>
    </aside>
  );
}
