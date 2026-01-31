type ReadPageProps = {
  params: {
    slug: string;
  };
};

export default function ReadPage({ params }: ReadPageProps) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Chapter: {params.slug}</h1>
    </main>
  );
}
