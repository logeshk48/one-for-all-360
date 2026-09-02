export type Industry = {
  num: string;
  name: string;
  short: string;
  body: string;
  tags: string[];
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string | null;
};

export const brand = {
  name: "ONE FOR ALL 360°",
  tagline: "Everything. One Place.",
};

export const nav = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "About", href: "#about" },
];

export const hero = {
  eyebrow: "One For All 360°",
  headline: ["Everything.", "One Place."],
  support:
    "Building a connected business ecosystem across industries, starting from India and reaching the world.",
  primaryCta: { label: "Explore the Ecosystem", href: "#ecosystem" },
  secondaryCta: { label: "Our Vision", href: "#idea" },
};

export const intro = {
  label: "01 — The Idea",
  headline: ["Industries", "don't exist", "in isolation."],
  names: [
    "Garments.",
    "Agriculture.",
    "Construction.",
    "Technology.",
    "Manufacturing.",
    "Services.",
  ],
  turn: "Everything connects.",
  close: "That's One For All ",
};

export const concept = {
  headline: "What does 360° mean?",
  lead: "360° means looking beyond one product, one service, or one industry.",
  body: "We are building an ecosystem where people and businesses can discover products, access services, build partnerships and explore opportunities — all in one place.",
  layers: [
    { key: "Products", note: "Discover what is being made." },
    { key: "Services", note: "Access what is being offered." },
    { key: "Business", note: "Connect who is building." },
    { key: "Opportunities", note: "Find where to grow next." },
  ],
};

export const industriesSection = {
  label: "02 — The Ecosystem",
  headline: ["One ecosystem.", "Multiple possibilities."],
  lead: "Multiple industries. One growing ecosystem.",
  closingHeadline: "And we're just getting started.",
  closingNote: "More industries are coming.",
};

export const industries: Industry[] = [
  {
    num: "01",
    name: "Garments",
    short: "GARMENTS",
    body: "Connecting products, sourcing and opportunities across the apparel ecosystem.",
    tags: ["Products", "Manufacturing", "Sourcing", "Distribution"],
  },
  {
    num: "02",
    name: "Construction",
    short: "CONSTRUCTION",
    body: "Connecting products, materials, services and opportunities across construction.",
    tags: ["Materials", "Services", "Supply", "Projects"],
  },
  {
    num: "03",
    name: "Agriculture",
    short: "AGRICULTURE",
    body: "Connecting agricultural products, solutions and opportunities.",
    tags: ["Produce", "Solutions", "Supply", "Markets"],
  },
  {
    num: "04",
    name: "IT & Technology",
    short: "IT & TECHNOLOGY",
    body: "Building connections through digital solutions, technology and innovation.",
    tags: ["Software", "Systems", "Innovation", "Support"],
  },
  {
    num: "05",
    name: "Manufacturing",
    short: "MANUFACTURING",
    body: "Connecting production, sourcing, supply and business opportunities.",
    tags: ["Production", "Sourcing", "Supply", "Partners"],
  },
  {
    num: "06",
    name: "Services",
    short: "SERVICES",
    body: "Connecting people and businesses with the services they need.",
    tags: ["Business", "Technical", "Logistics", "Support"],
  },
];

export const areasSection = {
  headline: "One Platform. Multiple Possibilities.",
  areas: [
    {
      id: "products",
      num: "01",
      title: "Products",
      body: "Discover products across industries.",
      status: "Coming as the ecosystem grows.",
    },
    {
      id: "services",
      num: "02",
      title: "Services",
      body: "Find businesses and services that solve real needs.",
      status: "Coming as the ecosystem grows.",
    },
    {
      id: "opportunities",
      num: "03",
      title: "Opportunities",
      body: "Discover partnerships, sourcing, collaboration and business opportunities.",
      status: "Coming as the ecosystem grows.",
    },
  ],
};

export const globalVision = {
  headline: ["Born from India.", "Built for the world."],
  support: "Our journey begins in India. Our ambition doesn't end there.",
};

export const founder = {
  headline: "It started with a bigger idea.",
  quote:
    "நான் ஒரு business start பண்ணல.\nகொஞ்சம் பெரிய விஷயம் plan பண்ணிட்டு இருக்கேன்.",
  body: [
    "One For All 360° started with the idea that businesses, industries and opportunities shouldn't always exist in isolation.",
    "The vision is to gradually bring them together into one connected ecosystem.",
  ],
  cta: { label: "Follow the Journey", href: "#journey" },
};

export const partner = {
  headline: "Build With Us.",
  support: "The ecosystem grows through people, businesses and partnerships.",
  categories: [
    "Manufacturers",
    "Suppliers",
    "Distributors",
    "Service Providers",
    "Technology Partners",
    "Business Partners",
    "Investors",
  ],
  partnershipTypes: [
    "Manufacturer",
    "Supplier",
    "Distributor",
    "Service Provider",
    "Technology Partner",
    "Business Partner",
    "Investor",
    "Other",
  ],
  cta: "Become a Partner",
};

export const journey = {
  headline: "The journey starts here.",
  support: "Follow One For All 360° as the ecosystem takes shape.",
};

export const finalCta = {
  headline: "Something Bigger Is Being Built.",
  lines: [
    "One industry at a time.",
    "One connection at a time.",
    "One opportunity at a time.",
  ],
  primaryCta: { label: "Join the Journey", href: "#journey" },
  secondaryCta: { label: "Become a Partner", href: "#partners" },
};

export const contact = {
  email: "officialoneforall360@gmail.com",
  phone: "+91 7598841285",
};

export const social: SocialLink[] = [
  {
    label: "YouTube",
    handle: "@OneForAll360",
    href: "https://www.youtube.com/@OneForAll360",
  },
  // TODO: replace handle + href once the Instagram account is confirmed.
  { label: "Instagram", handle: "Coming soon", href: null },
];

export const footerNav = [
  { label: "Home", href: "#top" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export const legal = "© 2026 One For All 360°. All Rights Reserved.";