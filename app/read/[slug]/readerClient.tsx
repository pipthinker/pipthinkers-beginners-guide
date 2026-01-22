"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "../../page.module.css";

type Chapter = {
  slug: string;
  title: string;
  sections: { heading?: string; body: string }[];
};

export default function ReaderClient({
  chapter,
  minutes,
  prevSlug,
  nextSlug,
}: {
  chapter: Chapter;
  minutes: number;
  prevSlug: string | null;
  nextSlug: string | null;
}) {
  const [progress, setProgress] = useState(0);
  const [fontStep, setFontStep] = useState<0 | 1 | 2>(1);

  const fontScale = useMemo(() => {
    if (fontStep === 0) return 0.95;
    if (fontStep === 2) return 1.12;
    return 1.0;
  }, [fontStep]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max <= 0 ? 0 : (window.scrollY / max) * 100;
      setProgress(Math.max(0, Math.min(100, pct)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={styles.main}>
      {/* progress */}
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      <div className={`${styles.container} ${styles.readerWrap}`}>
        <div className={styles.card}>
          {/* header */}
          <div className={styles.readerHeader}>
            <div>
              <h1 className={styles.title}>{chapter.title}</h1>

              <div className={styles.readerMeta} style={{ marginTop: 8 }}>
                <span className={styles.chip}>{minutes} min</span>
                <span className={styles.chip}>{Math.round(progress)}%</span>
              </div>
            </div>

            <div className={styles.fontControls}>
              <button
                className={`${styles.secondaryBtn} ${styles.fontBtn}`}
                onClick={() => setFontStep(0)}
                type="button"
              >
                A-
              </button>
              <button
                className={`${styles.secondaryBtn} ${styles.fontBtn}`}
                onClick={() => setFontStep(1)}
                type="button"
              >
                A
              </button>
              <button
                className={`${styles.secondaryBtn} ${styles.fontBtn}`}
                onClick={() => setFontStep(2)}
                type="button"
              >
                A+
              </button>
            </div>
          </div>

          {/* content */}
          <div
            className={`${styles.content} ${styles.readerContent}`}
            style={{ fontSize: `${fontScale}rem` }}
          >
            {chapter.sections.map((s, i) => (
              <div key={i} className={styles.section}>
                {s.heading ? <h2 className={styles.h2}>{s.heading}</h2> : null}
                <p className={styles.p}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sticky nav */}
      <div className={styles.stickyNav}>
        <div className={styles.stickyInner}>
          {prevSlug ? (
            <Link className={styles.secondaryBtn} href={`/read/${prevSlug}`}>
              ← Previous
            </Link>
          ) : (
            <span className={styles.navSpacer} />
          )}

          <Link className={styles.secondaryBtn} href="/chapters">
            Contents
          </Link>

          {nextSlug ? (
            <Link className={styles.primaryBtn} href={`/read/${nextSlug}`}>
              Next →
            </Link>
          ) : (
            <Link className={styles.primaryBtn} href="/">
              Done ✓
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
