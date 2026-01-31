import Link from "next/link";
import { notFound } from "next/navigation";
import { CHAPTERS } from "@/app/content/chapters";

type PageProps = {
  params: { slug: string };
};

export default function ReadSlugPage({ params }: PageProps) {
  const idx = CHAPTERS.findIndex((c) => c.slug === params.slug);
  if (idx === -1) return notFound();

  const chapter = CHAPTERS[idx];
  const prev = idx > 0 ? CHAPTERS[idx - 1].slug : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1].slug : null;

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ display: "flex", gap: 12, justifyContent: "space-between", marginBottom: 18 }}>
        <Link href="/" style={{ textDecoration: "none" }}>← Home</Link>
        <Link href="/chapters" style={{ textDecoration: "none" }}>Contents</Link>
      </div>

      <h1 style={{ fontSize: 28, margin: "10px 0 22px" }}>{chapter.title}</h1>

      <article style={{ display: "grid", gap: 18, lineHeight: 1.75, fontSize: 16 }}>
        {chapter.sections.map((s, i) => (
          <section key={i}>
            {s.heading ? (
              <h2 style={{ fontSize: 18, margin: "18px 0 10px" }}>{s.heading}</h2>
            ) : null}
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{s.body}</p>
          </section>
        ))}
      </article>

      <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
        {prev ? <Link href={`/read/${prev}`}>← Prev</Link> : <span />}
        <span style={{ flex: 1 }} />
        {next ? <Link href={`/read/${next}`}>Next →</Link> : <span />}
      </div>
    </main>
  );
}
