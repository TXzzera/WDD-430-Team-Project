"use client";

import styles from "../page.module.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Footer from "../components/footer";
import ArtCard from "../components/artCard";
import { useState } from "react";
import Filter from "../components/filter";


export default function ArtsPage() {
  const arts = [
  //Ana Antunes — wooden animal sculptures
  {
    id: 1,
    name: "Wooden Fox Sculpture",
    price: 70,
    image: "/arts/wooden-fox.png",
    artist: "Ana Antunes",
  },
  {
    id: 2,
    name: "Wooden Owl Sculpture",
    price: 70,
    image: "/arts/wooden-owl.png",
    artist: "Ana Antunes",
  },

  //Lucas Louza — wooden wall art/panels
  {
    id: 3,
    name: "Wood Fisherman Panel",
    price: 145,
    image: "/arts/wood-panel-fisherman.png",
    artist: "Lucas Louza",
  },
  {
    id: 4,
    name: "Aztec Wood Art",
    price: 235,
    image: "/arts/aztec-wood-art.png",
    artist: "Lucas Louza",
  },

  //Beatriz Barros — biscuit characters
  {
    id: 5,
    name: "Biscuit Mario Characters",
    price: 80,
    image: "/arts/biscuit-mario.png",
    artist: "Beatriz Barros",
  },
  {
    id: 6,
    name: "SpongeBob Biscuit",
    price: 45,
    image: "/arts/biscuit-spongebob.png",
    artist: "Beatriz Barros",
  },

  //Rafael Ramos — clay vases
  {
    id: 7,
    name: "Rustic Clay Vase Kit",
    price: 110,
    image: "/arts/rustic-vase-kit.png",
    artist: "Rafael Ramos",
  },
  {
    id: 8,
    name: "Ornate Clay Vase",
    price: 90,
    image: "/arts/ornate-vase.png",
    artist: "Rafael Ramos",
  },

  //Marina Moura — crochet dolls and animals
  {
    id: 9,
    name: "Crochet Doll Girl",
    price: 30,
    image: "/arts/crochet-doll.png",
    artist: "Marina Moura",
  },
  {
    id: 10,
    name: "Handmade Crochet Bunny",
    price: 42,
    image: "/arts/crochet-bunny.png",
    artist: "Marina Moura",
  },

  //João Jorge — realistic paintings
  {
    id: 11,
    name: "Messi Realistic Painting",
    price: 250,
    image: "/arts/messi-painting.png",
    artist: "João Jorge",
  },
  {
    id: 12,
    name: "Lyon Oil Painting",
    price: 200,
    image: "/arts/lyon-painting.png",
    artist: "João Jorge",
  },
];


  const [selectedArtist, setSelectedArtist] = useState("");
  const artists = Array.from(new Set(arts.map((art) => art.artist)));
  const filteredArts = arts.filter(
    (art) => !selectedArtist || art.artist === selectedArtist
  );

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.page}>
        <Header />

        <section>
          <h1 className={styles.artsTitle}>Appreciate the Arts</h1>

          <Filter
            artists={artists}
            onChange={({ artist }) => setSelectedArtist(artist || "")}
          />

          <div className={styles.artsGrid}>
            {filteredArts.map((art) => (
              <ArtCard
                key={art.id}
                name={art.name}
                price={art.price}
                image={art.image}
                artist={art.artist}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
