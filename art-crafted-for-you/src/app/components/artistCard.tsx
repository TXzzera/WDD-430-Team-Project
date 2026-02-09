"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

type ArtistCardProps = {
  id: number;
  name: string;
  image: string;
  gender: "male" | "female";
};

export default function ArtistCard({ id, name, image, gender }: ArtistCardProps) {
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

      <Link href={`/artists/${id}`}>
          <button className={styles.buttonPrimary}>
            {gender === "male" ? "Know Him" : "Know Her"}
          </button>
      </Link>
    </div>
  );
}
