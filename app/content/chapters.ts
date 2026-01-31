export type Chapter = {
  slug: string;
  title: string;
  sections: {
    heading?: string;
    body: string;
  }[];
};

export const CHAPTERS: Chapter[] = [
  {
    slug: "welcome",
    title: "Welcome",
    sections: [
      {
        body:
          "This guide is designed to help you understand cryptocurrency calmly and clearly. " +
          "You don’t need prior knowledge. Read slowly, think critically, and never rush decisions."
      }
    ]
  },
  {
    slug: "what-is-crypto",
    title: "What Is Cryptocurrency?",
    sections: [
      {
        body:
          "Cryptocurrency is a form of digital money that works without banks or central authorities. " +
          "It relies on cryptography and distributed networks called blockchains."
      }
    ]
  },
  {
    slug: "why-crypto-exists",
    title: "Why Crypto Exists",
    sections: [
      {
        body:
          "Traditional financial systems are slow, expensive, and controlled by intermediaries. " +
          "Cryptocurrency was created to give people direct control over their money."
      }
    ]
  },
  {
    slug: "safety-first",
    title: "Safety First",
    sections: [
      {
        body:
          "Never share your private keys or recovery phrases. No legitimate service will ask for them. " +
          "Most losses in crypto happen due to scams, not technology."
      }
    ]
  }
];
