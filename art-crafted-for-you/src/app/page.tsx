import styles from "./page.module.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.page}>
        <Header />

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

        <Footer />
      </main>
    </div>
  );
}
