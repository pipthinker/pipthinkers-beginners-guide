import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Crypto 101</h1>

          <p className={styles.subtitle}>
            A calm, beginner-friendly guide to understanding crypto — 
            without noise, hype, or pressure.
          </p>

          <div className={styles.actions}>
            <Link href="/read" className={styles.primaryBtn}>
              Start Reading
            </Link>

            <Link href="/chapters" className={styles.secondaryBtn}>
              Contents
            </Link>
          </div>
        </div>
      </div>

      {/* subtle credit */}
      <div className={styles.credit}>
        Content by Pipthinker
      </div>
    </main>
  );
}
