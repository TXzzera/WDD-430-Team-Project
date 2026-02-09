"use client";

import styles from "../page.module.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

const SITE_URL = "https://mywebsitevercel.com"; /*I'll replace this with the actual URL when deploying*/

export default function SharePage() {
  const encodedUrl = encodeURIComponent(SITE_URL);
  const encodedText = encodeURIComponent(
    "Check out this amazing handmade art marketplace!"
  );

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.page}>
        <Header />

        <section className={styles.sharePage}>
          <h1 className={styles.artsTitle}>Share Our Website</h1>
          <p>Help us grow by sharing our platform with your friends 💛</p>

          <div className={styles.shareButtons}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
              Share on Facebook
            </a>

            <a
              href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shareButton}
            >
              <Image
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              Share on WhatsApp
            </a>

            <div className={styles.instagramBox}>
              <div className={styles.instagramHeader}>
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
                <strong>Instagram</strong>
              </div>

              <p>
                Instagram doesn’t allow direct link sharing.
                Copy the link below and share it on your story or bio:
              </p>

              <input
                type="text"
                value={SITE_URL}
                readOnly
                onClick={(e) => e.currentTarget.select()}
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
