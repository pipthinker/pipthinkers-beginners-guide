import { notFound } from "next/navigation";
import { CHAPTERS } from "@/app/content/chapters";

type PageProps = {
  params: { slug: string };
};

export default function ReadPage({ params }: PageProps) {
  const { slug } = params;

  const chapter = CHAPTERS.find((c) => c.slug === slug);
  if (!chapter) return notFound();

  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 64px" }}>
      <header style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, opacity: 0.6, letterSpacing: 1 }}>
          CRYPTO 101
        </div>
        <h1 style={{ fontSize: 28, margin: "8px 0 0" }}>{chapter.title}</h1>
      </header>

      <article style={{ lineHeight: 1.75, fontSize: 16 }}>
        {chapter.sections.map((s, i) => (
          <section key={i} style={{ marginBottom: 22 }}>
            {s.heading ? (
              <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>{s.heading}</h2>
            ) : null}
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{s.body}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
