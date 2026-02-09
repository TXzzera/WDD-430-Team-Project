"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "../../page.module.css";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Footer from "../../components/footer";

const arts = [
  { id: "1", name: "Wooden Fox Sculpture", price: 70, image: "/arts/wooden-fox.png", artist: "Ana Antunes", description: "Beautiful handcrafted fox sculpture made of wood." },
  { id: "2", name: "Wooden Owl Sculpture", price: 70, image: "/arts/wooden-owl.png", artist: "Ana Antunes", description: "Cute wooden owl with intricate details." },
  { id: "3", name: "Wood Fisherman Panel", price: 145, image: "/arts/wood-panel-fisherman.png", artist: "Lucas Louza", description: "Detailed wooden panel depicting a fisherman in action." },
  { id: "4", name: "Aztec Wood Art", price: 235, image: "/arts/aztec-wood-art.png", artist: "Lucas Louza", description: "Intricate Aztec-inspired wooden wall art panel." },
  { id: "5", name: "Biscuit Mario Characters", price: 80, image: "/arts/biscuit-mario.png", artist: "Beatriz Barros", description: "Handcrafted Mario characters made from colorful biscuit clay." },
  { id: "6", name: "SpongeBob Biscuit", price: 45, image: "/arts/biscuit-spongebob.png", artist: "Beatriz Barros", description: "Cute SpongeBob figurine created with biscuit clay." },
  { id: "7", name: "Rustic Clay Vase Kit", price: 110, image: "/arts/rustic-vase-kit.png", artist: "Rafael Ramos", description: "Set of rustic clay vases perfect for decorative arrangements." },
  { id: "8", name: "Ornate Clay Vase", price: 90, image: "/arts/ornate-vase.png", artist: "Rafael Ramos", description: "Elegant clay vase with intricate ornamental details." },
  { id: "9", name: "Crochet Doll Girl", price: 30, image: "/arts/crochet-doll.png", artist: "Marina Moura", description: "Adorable handmade crochet doll with fine stitching." },
  { id: "10", name: "Handmade Crochet Bunny", price: 42, image: "/arts/crochet-bunny.png", artist: "Marina Moura", description: "Soft and cute crochet bunny, perfect as a gift." },
  { id: "11", name: "Messi Realistic Painting", price: 250, image: "/arts/messi-painting.png", artist: "João Jorge", description: "Highly detailed oil painting of Messi capturing his iconic pose." },
  { id: "12", name: "Lyon Oil Painting", price: 200, image: "/arts/lyon-painting.png", artist: "João Jorge", description: "Realistic oil painting featuring Lyon in vibrant colors." },
];

export default function ArtPage() {
  const params = useParams();
  const art = arts.find(a => a.id === params.artId);

  if (!art) return <p>Art not found</p>;

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.page}>
        <Header />

        <section className={styles.artDetail}>
          <h1>{art.name}</h1>
          <p>By {art.artist}</p>
          <Image src={art.image} alt={art.name} width={300} height={300} className={styles.artImage} />
          <p>{art.description}</p>
          <p>Price: ${art.price}</p>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </section>

        <Footer />
      </main>
    </div>
  );
}
