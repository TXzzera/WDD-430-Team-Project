"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

interface ArtCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  artist: string;
}

export default function ArtCard({
  id,
  name,
  price,
  image,
  artist,
}: ArtCardProps) {
  return (
    <div className={styles.artCard}>
      <Link href={`/arts/${id}`}>
        <Image
          src={image}
          alt={name}
          width={210}
          height={210}
          className={styles.artImage}
        />
      </Link>

      <h3>{name}</h3>
      <p className={styles.artist}>by {artist}</p>

      <p className={styles.price}>${price.toFixed(2)}</p>

      <Link href={`/arts/${id}`}>
        <button className={styles.buttonPrimary}>View More</button>
      </Link>

    </div>
  );
}
