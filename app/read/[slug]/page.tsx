import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 18px" }}>
      <div style={{ marginBottom: 18, display: "flex", gap: 12 }}>
        <Link href="/chapters" style={{ opacity: 0.75 }}>
          ← Contents
        </Link>
        <Link href="/" style={{ opacity: 0.75 }}>
          Home
        </Link>
      </div>

      <h1 style={{ fontSize: 30, lineHeight: 1.15, marginBottom: 18 }}>
        {chapter.title}
      </h1>

      <div style={{ display: "grid", gap: 18 }}>
        {chapter.sections.map((s, i) => (
          <section key={i}>
            {s.heading ? (
              <h2 style={{ fontSize: 18, marginBottom: 8 }}>{s.heading}</h2>
            ) : null}
            <p style={{ opacity: 0.85, lineHeight: 1.8 }}>{s.body}</p>
          </section>
        ))}
      </div>

      <div
        style={{
          marginTop: 28,
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        {prev ? (
          <Link href={`/read/${prev.slug}`} style={{ opacity: 0.9 }}>
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link href={`/read/${next.slug}`} style={{ opacity: 0.9 }}>
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}
