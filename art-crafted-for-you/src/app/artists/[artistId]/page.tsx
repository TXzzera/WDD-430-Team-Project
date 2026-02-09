"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Footer from "../../components/footer";

const artists = [
  { id: "1", name: "Ana Antunes", image: "/artists/ana.png", gender: "female", bio: "Ana is 32 years old and she is from Curitiba, Paraná, Brazil. She is a talented sculptor specializing in wooden animals. Her pieces blend realism with delicate details, capturing the essence of each creature." },
  { id: "2", name: "Lucas Louza", image: "/artists/lucas.png", gender: "male", bio: "Lucas is 28 years old and he is from Porto Alegre, Rio Grande do Sul, Brazil. He creates wooden panels and wall art for interior decoration. His work combines traditional techniques with modern geometric designs." },
  { id: "3", name: "Beatriz Barros", image: "/artists/beatriz.png", gender: "female", bio: "Beatriz is 24 years old and she is from Recife, Pernambuco, Brazil. She specializes in biscuit characters. Her colorful and expressive creations charm fans of all ages, bringing personality and fun to every piece."},
  { id: "4", name: "Rafael Ramos", image: "/artists/rafael.png", gender: "male", bio: "Rafael is 24 years old and he is from Salvador, Bahia, Brazil. He works with clay vases, crafting rustic and ornate pieces. Each vase reflects his attention to detail and passion for handmade artistry."},
  { id: "5", name: "Marina Moura", image: "/artists/marina.png", gender: "female", bio: "Marina is 26 years old and she is from Fortaleza, Ceará, Brazil. She creates handmade crochet dolls and animals. Her delicate pieces combine creativity, vibrant colors, and care in every stitch."},
  { id: "6", name: "João Jorge", image: "/artists/joao.png", gender: "male", bio: "João Jorge is 25 years old and he is from São Paulo, São Paulo, Brazil. He is a realist painter, crafting detailed and expressive paintings. His works, often portraits or sports scenes, capture emotions with precision and skill."},
];

const arts = [
  { id: 1, name: "Wooden Fox Sculpture", image: "/arts/wooden-fox.png", artistId: "1" },
  { id: 2, name: "Wooden Owl Sculpture", image: "/arts/wooden-owl.png", artistId: "1" },
  { id: 3, name: "Wood Fisherman Panel", image: "/arts/wood-panel-fisherman.png", artistId: "2" },
  { id: 4, name: "Aztec Wood Art", image: "/arts/aztec-wood-art.png", artistId: "2" },
  { id: 5, name: "Biscuit Mario Characters", image: "/arts/biscuit-mario.png", artistId: "3" },
  { id: 6, name: "SpongeBob Biscuit", image: "/arts/biscuit-spongebob.png", artistId: "3" },
  { id: 7, name: "Rustic Clay Vase Kit", image: "/arts/rustic-vase-kit.png", artistId: "4" },
  { id: 8, name: "Ornate Clay Vase", image: "/arts/ornate-vase.png", artistId: "4" },
  { id: 9, name: "Crochet Doll Girl", image: "/arts/crochet-doll.png", artistId: "5" },
  { id: 10, name: "Handmade Crochet Bunny", image: "/arts/crochet-bunny.png", artistId: "5" },
  { id: 11, name: "Messi Realistic Painting", image: "/arts/messi-painting.png", artistId: "6" },
  { id: 12, name: "Lyon Oil Painting", image: "/arts/lyon-painting.png", artistId: "6" },
];

export default function ArtistPage() {
  const params = useParams();
  const artist = artists.find(a => a.id === params.artistId);

  if (!artist) return <p>Artist not found</p>;

  const artistArts = arts.filter(art => art.artistId === artist.id);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.page}>
        <Header />

        <section className={styles.artistDetail}>
          <h1 className={styles.artistsTitle}>{artist.name}</h1>

          <div className={styles.artistImageWrapper}>
            <Image
              src={artist.image}
              alt={artist.name}
              width={210}
              height={210}
              className={styles.artistImage}
            />
          </div>

          <p className={styles.artistBio}>{artist.bio}</p>

          <div className={styles.artistArts}>
              {artistArts.map((art) => (
                <div key={art.id} className={styles.artistArtCard}>
                  <Image src={art.image} alt={art.name} width={180} height={180} />
                    <p>{art.name}</p>
                  <Link href={`/arts/${art.id}`}>
                    <button className={styles.buttonPrimary}>View More</button>
                  </Link>
           </div>
  ))}
</div>

        </section>

        <Footer />
      </main>
    </div>
  );
}
