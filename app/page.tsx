"use client";

import { useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import Link from "next/link";
import styles from "./page.module.css";

import { BOOK_TITLE, BOOK_SUBTITLE, CHAPTERS } from "./content/chapters";
import ThemeToggle from "./ThemeToggle";
// IMPORTANT: update this filename if your PDF name is slightly different in /public
const PDF_FILENAME = "Pipthinkers_Crypto101_Original_plus_Beginner_Notes.pdf";

export default function Home() {
  const { isFrameReady, setFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) setFrameReady();
  }, [isFrameReady, setFrameReady]);

  const firstChapter = CHAPTERS[0]?.slug ?? "welcome";

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
  <ThemeToggle />
</div>
          <h1 className={styles.title}>{BOOK_TITLE}</h1>
          <p className={styles.subtitle}>{BOOK_SUBTITLE}</p>

          <div className={styles.actions}>
            <Link className={styles.primaryBtn} href={`/read/${firstChapter}`}>
              Start Reading
            </Link>

            <Link className={styles.secondaryBtn} href="/chapters">
              Table of Contents
            </Link>

            <a
              className={styles.secondaryBtn}
              href={`/${PDF_FILENAME}`}
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
          </div>

          <div className={styles.note}>
            <p>
              Free educational content. No financial advice. Move slowly and
              always prioritize safety.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
