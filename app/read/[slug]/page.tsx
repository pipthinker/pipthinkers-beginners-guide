import { notFound } from "next/navigation";
import { CHAPTERS } from "../../content/chapters";
import ReaderClient from "./readerClient";

export default async function ReadPage({
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

  return <ReaderClient chapter={chapter} prev={prev} next={next} />;
}
