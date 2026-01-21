import { notFound } from "next/navigation";
import { CHAPTERS } from "../../content/chapters";
import ReaderClient from "./readerClient";

type Props = {
  params: Promise<{ slug: string }>;
};

function estimateMinutes(chapter: (typeof CHAPTERS)[number]) {
  const text = chapter.sections
    .map((s) => `${s.heading ?? ""} ${s.body ?? ""}`)
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200)); // ~200 wpm
  return minutes;
}

export default async function ReadPage({ params }: Props) {
  const { slug } = await params;

  const idx = CHAPTERS.findIndex((c) => c.slug === slug);
  if (idx === -1) return notFound();

  const chapter = CHAPTERS[idx];
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  return (
    <ReaderClient
      chapter={chapter}
      minutes={estimateMinutes(chapter)}
      prevSlug={prev?.slug ?? null}
      nextSlug={next?.slug ?? null}
    />
  );
}
