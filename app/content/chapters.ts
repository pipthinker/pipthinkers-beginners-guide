export const BOOK_TITLE = "Crypto 101 for Beginners";
export const BOOK_SUBTITLE =
  "A simple, safe, and practical guide by Pipthinkers.";

export type Chapter = {
  slug: string;
  title: string;
  sections: { heading?: string; body: string }[];
};

export const CHAPTERS: Chapter[] = [
  {
    slug: "welcome",
    title: "Welcome & How to Use This Guide",
    sections: [
      {
        body:
          "Welcome. This mini app is a beginner-friendly way to learn crypto and Web3 step-by-step. " +
          "Use the chapters like short lessons. Take your time, and always prioritize safety.",
      },
      {
        heading: "Quick rule",
        body:
          "If you don’t understand how the money is made, assume the risk is high.",
      },
    ],
  },
  {
    slug: "safety-first",
    title: "Safety First (Read This Before Anything Else)",
    sections: [
      {
        body:
          "Never share your seed phrase or private key. No real support agent will ask for it. " +
          "Avoid links from DMs. Always double-check the network before sending funds.",
      },
    ],
  },
];
