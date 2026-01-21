import { notFound } from "next/navigation";
import { CHAPTERS } from "../../content/chapters";
import ReaderClient from "./readerClient";

export default function ReadPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const idx = CHAPTERS.findIndex((c) => c.slug === slug);
  if (idx === -1) return notFound();

  const chapter = CHAPTERS[idx];
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  // simple estimate: 200 words per minute
  const wordCount = chapter.sections
    .map((s) => `${s.heading ?? ""} ${s.body}`.trim())
    .join(" ")
    .split(/\s+/).filter(Boolean).length;

  const minutes = Math.max(1, Math.round(wordCount / 200));

  return (
    <ReaderClient
      chapter={chapter}
      minutes={minutes}
      prevSlug={prev?.slug ?? null}
      nextSlug={next?.slug ?? null}
    />
  );
}
