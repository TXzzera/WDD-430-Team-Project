"use client";

import styles from "../page.module.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Footer from "../components/footer";
import Filter from "../components/filter";

import { useState } from "react";
import { useSession } from "next-auth/react";

interface Review {
  id: number;
  user: string;
  artist: string;
  art: string;
  comment: string;
}

export default function FeedbackPage() {
  const { data: session } = useSession();
  const loggedUser = session?.user?.name;

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      user: "Emily Carter",
      artist: "Ana Antunes",
      art: "Wooden Fox Sculpture",
      comment: "I bought this for my daughter. She loved it!",
    },
    {
      id: 2,
      user: "Michael Brown",
      artist: "Ana Antunes",
      art: "Wooden Owl Sculpture",
      comment:"Very detailed and charming. It adds a rustic touch to my home.",
    },
    {
      id: 3,
      user: "Daniel Smith",
      artist: "Lucas Louza",
      art: "Wood Fisherman Panel",
      comment: "It reminds me of my childhood fishing with my grandfather. Very nostalgic.",
    },
    {
      id: 4,
      user: "Laura Wilson",
      artist: "Lucas Louza",
      art: "Aztec Wood Art",
      comment: "Strong visual impact. A real statement piece.",
    },
    {
      id: 5,
      user: "Sophia Miller",
      artist: "Beatriz Barros",
      art: "Biscuit Mario Characters",
      comment: "As a Mario fan, this was the perfect purchase!",
    },
    {
      id: 6,
      user: "James Taylor",
      artist: "Beatriz Barros",
      art: "SpongeBob Biscuit",
      comment: "Amazing details. Best buy ever.",
    },
    {
      id: 7,
      user: "Olivia Johnson",
      artist: "Rafael Ramos",
      art: "Rustic Clay Vase Kit",
      comment: "Perfect for home decoration.",
    },
    {
      id: 8,
      user: "William Anderson",
      artist: "Rafael Ramos",
      art: "Ornate Clay Vase",
      comment: "Elegant and very well made. Totally worth it.",
    },
    {
      id: 9,
      user: "Emma Davis",
      artist: "Marina Moura",
      art: "Crochet Doll Girl",
      comment: "So cute! My niece was very happy.",
    },
    {
      id: 10,
      user: "Noah Martinez",
      artist: "Marina Moura",
      art: "Handmade Crochet Bunny",
      comment: "Lovely gift idea. I will definitely buy more.",
    },
    {
      id: 11,
      user: "Lucas Pereira",
      artist: "João Jorge",
      art: "Messi Realistic Painting",
      comment:"I am a big Messi fan. This painting is unbelievable and looks amazing in my bedroom.",
    },
    {
      id: 12,
      user: "Carlos Mendes",
      artist: "João Jorge",
      art: "Lyon Oil Painting",
      comment:"I bought this for my art collection. I cannot wait to see new works from this artist.",
    },
  ]);

  const [filters, setFilters] = useState({
    artist: "",
    art: "",
  });

  const artists = Array.from(new Set(reviews.map((r) => r.artist)));

  const arts = reviews
    .filter((r) => r.artist === filters.artist)
    .map((r) => r.art);

  const filteredReviews = reviews.filter((review) => {
    if (filters.artist && review.artist !== filters.artist) return false;
    if (filters.art && review.art !== filters.art) return false;
    return true;
  });

  const [newReview, setNewReview] = useState({
    artist: "",
    art: "",
    comment: "",
  });

  const handleSubmit = () => {
    if (!loggedUser || !newReview.artist || !newReview.art || !newReview.comment) {
      return;
    }

    setReviews((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        user: loggedUser,
        artist: newReview.artist,
        art: newReview.art,
        comment: newReview.comment,
      },
    ]);

    setNewReview({
      artist: "",
      art: "",
      comment: "",
    });
  };

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.page}>
        <Header />

        <section>
          <h1 className={styles.artsTitle}>User Feedback</h1>

          <Filter
            artists={artists}
            arts={arts}
            enableArtFilter
            onChange={({ artist, art }) =>
              setFilters({
                artist: artist || "",
                art: art || "",
              })
            }
          />

          <div className={styles.feedbackGrid}>
            {/* Reviews list */}
            <div>
              {filteredReviews.map((review) => (
                <div key={review.id} className={styles.reviewCard}>
                  <strong>{review.art}</strong>

                  <p className={styles.reviewArtist}>
                    by {review.artist}
                  </p>

                  <p className={styles.reviewUser}>
                    Reviewed by {review.user}
                  </p>

                  <p>{review.comment}</p>
                </div>
              ))}
            </div>

            {/* Review form */}
            <div className={styles.reviewForm}>
              <h3>Add a Review</h3>

              {loggedUser ? (
                <p className={styles.reviewUser}>
                  Logged in as <strong>{loggedUser}</strong>
                </p>
              ) : (
                <p className={styles.reviewUser}>
                  You must be logged in to submit a review
                </p>
              )}

              <select
                value={newReview.artist}
                onChange={(e) =>
                  setNewReview({
                    ...newReview,
                    artist: e.target.value,
                    art: "",
                  })
                }
              >
                <option value="">Select artist</option>
                {artists.map((artist) => (
                  <option key={artist} value={artist}>
                    {artist}
                  </option>
                ))}
              </select>

              {newReview.artist && (
                <select
                  value={newReview.art}
                  onChange={(e) =>
                    setNewReview({ ...newReview, art: e.target.value })
                  }
                >
                  <option value="">Select art</option>
                  {reviews
                    .filter((r) => r.artist === newReview.artist)
                    .map((r) => (
                      <option key={r.art} value={r.art}>
                        {r.art}
                      </option>
                    ))}
                </select>
              )}

              <textarea
                placeholder="Write your feedback..."
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
              />

              <button onClick={handleSubmit} disabled={!loggedUser}>
                Submit Review
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
