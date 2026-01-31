import { redirect } from "next/navigation";
import { CHAPTERS } from "@/app/content/chapters";

export default function ReadIndexPage() {
  const first = CHAPTERS[0]?.slug;
  redirect(first ? `/read/${first}` : "/");
}
