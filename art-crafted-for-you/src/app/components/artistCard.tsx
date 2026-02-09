"use client";
import Image from "next/image";
import styles from "../page.module.css";

type ArtistCardProps = {
  name: string;
  image: string;
};

export default function ArtistCard({ name, image }: ArtistCardProps) {
  return (
    <div className={styles.artistCard}>
      <Image
        src={image}
        alt={name}
        width={140}
        height={140}
        className={styles.artistImage}
      />
      <h3>{name}</h3>
    </div>
  );
}
