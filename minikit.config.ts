const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
  miniapp: {
    version: "1",

    // Branding
    name: "Crypto 101 for Beginners",
    subtitle: "A beginner-friendly crypto guide",
    description: "A simple, safe, and practical crypto guide by Pipthinkers.",

    // Assets (keep these filenames as they exist in /public for now)
    screenshotUrls: ["/screenshot-portrait.png"],
    iconUrl: "/pipthinkers-icon-512.png",
    splashImageUrl: "/blue-hero.png",
    splashBackgroundColor: "#000000",
    heroImageUrl: "/hero.png",

    // URLs
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,

    // Category + tags (match the actual product)
    primaryCategory: "education",
    tags: ["crypto", "web3", "beginners", "security", "wallets"],

    // Social preview / metadata
    tagline: "Learn crypto step-by-step with safety first.",
    ogTitle: "Crypto 101 for Beginners",
    ogDescription:
      "A simple, safe, and practical crypto guide by Pipthinkers.",
    ogImageUrl: "/blue-hero.png",
  },
} as const;
