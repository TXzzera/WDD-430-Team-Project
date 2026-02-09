"use client";

import styles from "../page.module.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Footer from "../components/footer";
import ArtistCard from "../components/artistCard";


export default function ArtistsPage() {
  const artists = [
    { id: 1, name: "Ana Antunes", image: "/artists/ana.png" },
    { id: 2, name: "Lucas Louza", image: "/artists/lucas.png" },
    { id: 3, name: "Beatriz Barros", image: "/artists/beatriz.png" },
    { id: 4, name: "Rafael Ramos", image: "/artists/rafael.png" },
    { id: 5, name: "Marina Moura", image: "/artists/marina.png" },
    { id: 6, name: "João Jorge", image: "/artists/joao.png" },
  ];

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.page}>
        <Header />

        <section>
          <h1 className={styles.artistsTitle}>Our Artists</h1>

          <div className={styles.artistsGrid}>
            {artists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
