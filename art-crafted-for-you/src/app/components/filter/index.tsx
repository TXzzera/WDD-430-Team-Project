"use client";

import { useState } from "react";
import styles from "./filter.module.css";

interface FilterProps {
  artists: string[];
  arts?: string[];
  enableArtFilter?: boolean;
  onChange: (filters: { artist?: string; art?: string }) => void;
}

export default function Filter({
  artists,
  arts = [],
  enableArtFilter = false,
  onChange,
}: FilterProps) {
  const [artist, setArtist] = useState("");
  const [art, setArt] = useState("");

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Artist</label>
        <select
          className={styles.filterSelect}
          value={artist}
          onChange={(e) => {
            setArtist(e.target.value);
            setArt("");
            onChange({ artist: e.target.value, art: "" });
          }}
        >
          <option value="">All artists</option>
          {artists.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      {enableArtFilter && artist && (
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Art</label>
          <select
            className={styles.filterSelect}
            value={art}
            onChange={(e) => {
              setArt(e.target.value);
              onChange({ artist, art: e.target.value });
            }}
          >
            <option value="">All arts</option>
            {arts.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
