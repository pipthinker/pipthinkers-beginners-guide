import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import { CHAPTERS } from "../../content/chapters";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ReadPage({ params }: Props) {
  const { slug } = await params;

  const idx = CHAPTERS.findIndex((c) => c.slug === slug);
  if (idx === -1) return notFound();

  const chapter = CHAPTERS[idx];
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>{chapter.title}</h1>

          <div className={styles.content}>
            {chapter.sections.map((s, i) => (
              <div key={i} className={styles.section}>
                {s.heading ? <h2 className={styles.h2}>{s.heading}</h2> : null}
                <p className={styles.p}>{s.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            {prev ? (
              <Link className={styles.secondaryBtn} href={`/read/${prev.slug}`}>
                ← Previous
              </Link>
            ) : (
              <span />
            )}

            <Link className={styles.secondaryBtn} href="/chapters">
              Contents
            </Link>

            {next ? (
              <Link className={styles.primaryBtn} href={`/read/${next.slug}`}>
                Next →
              </Link>
            ) : (
              <span />
            )}
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
