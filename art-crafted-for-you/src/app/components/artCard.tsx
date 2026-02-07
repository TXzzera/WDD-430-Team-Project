import Image from "next/image";
import styles from "../page.module.css";

interface ArtCardProps {
  name: string;
  price: number;
  image: string;
  artist: string;
}

export default function ArtCard({
  name,
  price,
  image,
  artist,
}: ArtCardProps) {
  return (
    <div className={styles.artCard}>
      <Image
        src={image}
        alt={name}
        width={210}
        height={210}
        className={styles.artImage}
      />

      <h3>{name}</h3>
      <p className={styles.artist}>by {artist}</p>

      <p className={styles.price}>
        ${price.toFixed(2)}
      </p>
    </div>
  );
}
