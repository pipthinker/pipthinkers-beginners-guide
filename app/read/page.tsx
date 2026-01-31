import { redirect } from "next/navigation";
import { CHAPTERS } from "../content/chapters";

export default function ReadIndexPage() {
  const first = CHAPTERS[0];
  if (!first) redirect("/");
  redirect(`/read/${first.slug}`);
}
