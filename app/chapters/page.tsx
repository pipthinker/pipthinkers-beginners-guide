import Link from "next/link";
import { CHAPTERS } from "../content/chapters";

export default function ChaptersPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 18px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 10 }}>Contents</h1>
      <p style={{ opacity: 0.75, marginBottom: 22 }}>
        Pick a chapter and start reading.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {CHAPTERS.map((c, i) => (
          <Link
            key={c.slug}
            href={`/read/${c.slug}`}
            style={{
              padding: "14px 14px",
              borderRadius: 14,
              border: "1px solid rgba(0,0,0,0.12)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 4 }}>
              {i + 1}. {c.title}
            </div>
            <div style={{ opacity: 0.7, fontSize: 13 }}>
              {c.sections.length} section{c.sections.length === 1 ? "" : "s"}
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/" style={{ opacity: 0.75 }}>
          ← Back home
        </Link>
      </div>
    </main>
  );
}
