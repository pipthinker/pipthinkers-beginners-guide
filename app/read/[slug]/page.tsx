import { notFound } from "next/navigation";
import { CHAPTERS } from "../../content/chapters";
import ReaderClient from "./readerClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ReadPage({ params }: Props) {
  const { slug } = await params;

  const idx = CHAPTERS.findIndex((c) => c.slug === slug);
  if (idx === -1) return notFound();

  const chapter = CHAPTERS[idx];
  const prevSlug = idx > 0 ? CHAPTERS[idx - 1].slug : null;
  const nextSlug = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1].slug : null;

  // simple read-time estimate
  const words = chapter.sections
    .map((s) => `${s.heading ?? ""} ${s.body}`)
    .join(" ")
    .trim()
    .split(/\s+/).filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(words / 180));

  return (
    <ReaderClient
      chapter={chapter}
      minutes={minutes}
      prevSlug={prevSlug}
      nextSlug={nextSlug}
    />
  );
}
