import Link from "next/link";
import styles from "../page.module.css";
import { BOOK_TITLE, CHAPTERS } from "../content/chapters";

export default function ChaptersPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>{BOOK_TITLE}</h1>
          <p className={styles.subtitle}>Table of Contents</p>

          <div className={styles.list}>
            {CHAPTERS.map((c) => (
              <Link key={c.slug} className={styles.listItem} href={`/read/${c.slug}`}>
                {c.title}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <Link className={styles.secondaryBtn} href="/">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
