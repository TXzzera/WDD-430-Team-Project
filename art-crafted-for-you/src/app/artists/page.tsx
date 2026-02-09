"use client";

import styles from "../page.module.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Footer from "../components/footer";
import ArtistCard from "../components/artistCard";

type Gender = "male" | "female";

export default function ArtistsPage() {
  const artists: { id: number; name: string; image: string; gender: Gender; link: string }[] = [
  { id: 1, name: "Ana Antunes", image: "/artists/ana.png", gender: "female", link: "/artists/1" },
  { id: 2, name: "Lucas Louza", image: "/artists/lucas.png", gender: "male", link: "/artists/2" },
  { id: 3, name: "Beatriz Barros", image: "/artists/beatriz.png", gender: "female", link: "/artists/3" },
  { id: 4, name: "Rafael Ramos", image: "/artists/rafael.png", gender: "male", link: "/artists/4" },
  { id: 5, name: "Marina Moura", image: "/artists/marina.png", gender: "female", link: "/artists/5" },
  { id: 6, name: "João Jorge", image: "/artists/joao.png", gender: "male", link: "/artists/6" },
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
                id={artist.id}
                name={artist.name}
                image={artist.image}
                gender={artist.gender}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
