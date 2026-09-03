export type Offering = {
  name: string;
  note: string;
};

export type Industry = {
  num: string;
  name: string;
  short: string;
  tagline: string;
  body: string;
  offerings: Offering[];
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

export const heroFeatures = [
  { title: "Multiple Industries", note: "One unified ecosystem." },
  { title: "Endless Opportunities", note: "Grow. Connect. Scale." },
  { title: "From India to World", note: "Local roots. Global reach." },
  { title: "Future Ready", note: "Innovation. Impact. Growth." },
];

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
  headline: ["One ecosystem.", "Multiple possibilities."],
  lead: "Multiple industries. One growing ecosystem.",
  closingHeadline: ["And we're just", "getting started."],
  closingBody: "Our ecosystem is expanding every day. More industries, more connections, more impact.",
  closingNote: "More industries are coming.",
};

export const industries: Industry[] = [
  {
    num: "01",
    name: "Garments",
    short: "GARMENTS",
    tagline: "Designing comfort. Delivering quality.",
    body: "Building better connections across fashion, textiles and apparel.",
    offerings: [
      { name: "Design", note: "From concept through to finished pattern." },
      { name: "Production", note: "Manufacturing partners at every scale." },
      { name: "Supply", note: "Fabric, trims and sourcing networks." },
      { name: "Markets", note: "Routes to buyers and retailers." },
    ],
  },
  {
    num: "02",
    name: "Construction",
    short: "CONSTRUCTION",
    tagline: "Building stronger. Building better.",
    body: "Connecting construction products, expertise and opportunities.",
    offerings: [
      { name: "Materials", note: "Sourcing what a project is built from." },
      { name: "Solutions", note: "Technical expertise where it's needed." },
      { name: "Projects", note: "Connecting capability to contracts." },
      { name: "Partners", note: "Contractors, suppliers and specialists." },
    ],
  },
  {
    num: "03",
    name: "Agriculture",
    short: "AGRICULTURE",
    tagline: "Growing today. Nourishing tomorrow.",
    body: "Connecting agricultural products, solutions and opportunities.",
    offerings: [
      { name: "Produce", note: "Fresh, quality produce from farms to markets." },
      { name: "Solutions", note: "Innovative solutions for modern agriculture." },
      { name: "Supply", note: "Reliable supply chain and distribution." },
      { name: "Markets", note: "Connecting buyers to growing opportunities." },
    ],
  },
  {
    num: "04",
    name: "IT & Technology",
    short: "IT & TECHNOLOGY",
    tagline: "Innovating now. Transforming always.",
    body: "Building technology connections that create smarter possibilities.",
    offerings: [
      { name: "Software", note: "Tools built for how businesses actually work." },
      { name: "Technology", note: "Infrastructure that scales with growth." },
      { name: "Solutions", note: "Applied answers to operational problems." },
      { name: "Innovation", note: "What becomes possible next." },
    ],
  },
  {
    num: "05",
    name: "Manufacturing",
    short: "MANUFACTURING",
    tagline: "Producing excellence. Powering progress.",
    body: "Connecting manufacturing capabilities, products and global opportunities.",
    offerings: [
      { name: "Production", note: "Capacity matched to requirement." },
      { name: "Machinery", note: "Equipment sourcing and support." },
      { name: "Supply", note: "Raw materials and component networks." },
      { name: "Markets", note: "Finding demand for what's produced." },
    ],
  },
  {
    num: "06",
    name: "Services",
    short: "SERVICES",
    tagline: "Empowering people. Enriching lives.",
    body: "Connecting people, expertise and services across industries.",
    offerings: [
      { name: "Consulting", note: "Advice grounded in real operations." },
      { name: "Professional", note: "Legal, financial and compliance support." },
      { name: "Solutions", note: "Services shaped around the problem." },
      { name: "Partners", note: "Providers vetted across the ecosystem." },
    ],
  },
];

export const journeySection = {
  headline: ["Six stages.", "One continuous loop."],
  lead: "How value moves through the ecosystem.",
  stages: [
    { num: "01", name: "Discover", body: "Find the products, services and partners that already exist across industries." },
    { num: "02", name: "Source", body: "Connect directly with suppliers, manufacturers and producers." },
    { num: "03", name: "Create", body: "Turn materials and capability into something worth selling." },
    { num: "04", name: "Connect", body: "Link businesses that would never otherwise meet." },
    { num: "05", name: "Distribute", body: "Move what's made to the markets that need it." },
    { num: "06", name: "Grow", body: "Every connection opens the next opportunity." },
  ],
};

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