import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.badge}>Academy</div>
          <h1 className={styles.title}>Crypto 101</h1>
          
          <p className={styles.subtitle}>
            A calm, beginner-friendly guide to understanding the world of 
            Web3 and Decentralized Finance without the noise, hype, or pressure.
          </p>

          <div className={styles.actions}>
            <Link href="/read" className={styles.primaryBtn}>
              Start Reading
            </Link>
            <Link href="/chapters" className={styles.secondaryBtn}>
              View Chapters
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.credit}>
        Content curated by <span>Pipthinker</span>
      </div>
    </main>
  );
}
