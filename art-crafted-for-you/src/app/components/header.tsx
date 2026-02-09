"use client";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../page.module.css";

const arts = [
  { id: 1, name: "Wooden Fox Sculpture", artist: "Ana Antunes", link: "/arts/1" },
  { id: 2, name: "Wooden Owl Sculpture", artist: "Ana Antunes", link: "/arts/2" },
  { id: 3, name: "Wood Fisherman Panel", artist: "Lucas Louza", link: "/arts/3" },
  { id: 4, name: "Aztec Wood Art", artist: "Lucas Louza", link: "/arts/4" },
  { id: 5, name: "Biscuit Mario Characters", artist: "Beatriz Barros", link: "/arts/5" },
  { id: 6, name: "SpongeBob Biscuit", artist: "Beatriz Barros", link: "/arts/6" },
  { id: 7, name: "Rustic Clay Vase Kit", artist: "Rafael Ramos", link: "/arts/7" },
  { id: 8, name: "Ornate Clay Vase", artist: "Rafael Ramos", link: "/arts/8" },
  { id: 9, name: "Crochet Doll Girl", artist: "Marina Moura", link: "/arts/9" },
  { id: 10, name: "Handmade Crochet Bunny", artist: "Marina Moura", link: "/arts/10" },
  { id: 11, name: "Messi Realistic Painting", artist: "João Jorge", link: "/arts/11" },
  { id: 12, name: "Lyon Oil Painting", artist: "João Jorge", link: "/arts/12" },
];

const artists = [
  { id: 1, name: "Ana Antunes", link: "/artists/1" },
  { id: 2, name: "Lucas Louza", link: "/artists/2" },
  { id: 3, name: "Beatriz Barros", link: "/artists/3" },
  { id: 4, name: "Rafael Ramos", link: "/artists/4" },
  { id: 5, name: "Marina Moura", link: "/artists/5" },
  { id: 6, name: "João Jorge", link: "/artists/6" },
];

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredArts = arts.filter(
    (art) =>
      art.name.toLowerCase().includes(search.toLowerCase()) ||
      art.artist.toLowerCase().includes(search.toLowerCase())
  );

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <header className={styles.header}>
  <div className={styles.topRow}>
    <Image
      src="/artcraftedlogo.png"
      alt="Art Crafted For You logo"
      width={200}
      height={200}
      className={styles.logoHeader}
    />

    <div className={styles.topBar}>
        {session ? (
          <>
            <span className={styles.userName}>Hello, {session.user?.name}!</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className={styles.loginButton}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("github")} // apenas login com GitHub
            className={styles.loginButton}
          >
            Login with GitHub
          </button>
        )}
    </div>
  </div>

  <div className={styles.searchContainer}>
    <input
      type="text"
      placeholder="Search for artists or artworks 🔍"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles.search}
    />

    {search && (
      <div className={styles.searchResults}>
        {filteredArts.map((art) => (
          <div
            key={art.id}
            onClick={() => {
              router.push(art.link);
              setSearch("");
            }}
          >
            {art.name} — {art.artist}
          </div>
        ))}

        {filteredArtists.map((artist) => (
          <div
            key={artist.id}
            onClick={() => {
              router.push(artist.link);
              setSearch("");
            }}
          >
            {artist.name} (artist)
          </div>
        ))}

        {filteredArts.length === 0 && filteredArtists.length === 0 && (
          <div>No results found.</div>
        )}
      </div>
    )}
  </div>
</header>
  );
}
