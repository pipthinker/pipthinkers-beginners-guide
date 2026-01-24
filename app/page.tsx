import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Crypto 101</h1>

          <p className={styles.subtitle}>
            A calm, beginner-friendly guide to understanding crypto without noise,
            hype, or pressure.
          </p>

          <div className={styles.quoteWrap}>
            <p className={styles.quote}>
              Move slowly. Learn the basics. Protect your keys.
            </p>
          </div>

          <div className={styles.actions}>
            <Link className={styles.primaryBtn} href="/chapters">
              Start Reading
            </Link>

            <Link className={styles.secondaryBtn} href="/chapters">
              Contents
            </Link>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.credit}>Content by Pipthinker</div>
        <div className={styles.hint}>Read like a book. One chapter at a time.</div>
      </footer>
    </main>
  );
}