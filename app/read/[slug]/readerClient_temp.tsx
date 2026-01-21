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
      {/* progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          zIndex: 50,
          background: "rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "rgba(255,255,255,0.9)",
            transition: "width 120ms linear",
          }}
        />
      </div>

      <div className={styles.container} style={{ paddingBottom: 92 }}>
        <div className={styles.card}>
          {/* header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <div>
              <h1 className={styles.title}>{chapter.title}</h1>
              <p className={styles.subtitle} style={{ marginTop: 8 }}>
                {minutes} min read
              </p>
            </div>

            {/* font controls */}
            <div style={{ display: "flex", gap: 8 }}>
              <button
                className={styles.secondaryBtn}
                onClick={() => setFontStep(0)}
                type="button"
                style={{ padding: "10px 12px" }}
              >
                A-
              </button>
              <button
                className={styles.secondaryBtn}
                onClick={() => setFontStep(1)}
                type="button"
                style={{ padding: "10px 12px" }}
              >
                A
              </button>
              <button
                className={styles.secondaryBtn}
                onClick={() => setFontStep(2)}
                type="button"
                style={{ padding: "10px 12px" }}
              >
                A+
              </button>
            </div>
          </div>

          {/* content */}
          <div className={styles.content} style={{ fontSize: `${fontScale}rem` }}>
            {chapter.sections.map((s, i) => (
              <div key={i} className={styles.section}>
                {s.heading ? <h2 className={styles.h2}>{s.heading}</h2> : null}
                <p className={styles.p}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sticky bottom nav */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          padding: 16,
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {prevSlug ? (
            <Link className={styles.secondaryBtn} href={`/read/${prevSlug}`}>
              ← Previous
            </Link>
          ) : (
            <span />
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
