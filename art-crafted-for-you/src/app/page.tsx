import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.layout}>
      {/* Sidebar will become a component next week*/}
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

      <main className={styles.page}>
        {/* Header will become a component next week*/}
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

        <section className={styles.grid}>
          <div className={styles.card}>
            <Image src="/artists.png" alt="Artists" width={200} height={200} />
            <p>Get to know our artists!</p>
          </div>

          <div className={styles.card}>
            <Image src="/arts.png" alt="Arts" width={200} height={200} />
            <p>Get to know their arts!</p>
          </div>

          <div className={styles.card}>
            <Image
              src="/feedback_satisfaction.svg"
              alt="Feedback"
              width={200}
              height={200}
            />
            <p>Give your feedback</p>
          </div>

          <div className={styles.card}>
            <Image
              src="/social_media.png"
              alt="Social Media"
              width={200}
              height={200}
            />
            <p>Share our work</p>
          </div>
        </section>

{/* Footer will become a component next week*/}
        <footer className={styles.footer}>
          <p>&copy; 2026 Bruno Teixeira – WDD430 – BYU Idaho</p>
        </footer>
      </main>
    </div>
  );
}
