/**
 * Lint Pros - site-wide data
 * Single source of truth for brand name, phone, service areas, services.
 * Any copy that repeats across pages lives here.
 */

export const site = {
  name: "Lint Pros",
  tagline: "Dryer vent cleaning for homes and businesses.",
  hero: {
    h1: "Dryer vent cleaning for homes and businesses",
    sub: "Firefighter-owned. CSIA certified. Fox River Grove based and serving the Northwest suburbs since 2010.",
  },
  phone: "(815) 345-5468",
  phoneHref: "tel:+18153455468",
  textHref: "sms:+18153455468",
  email: "info@lintpros.com",
  city: "Fox River Grove, IL",
  counties: ["McHenry", "Lake", "Cook", "Kane", "DuPage"],
  license: "Firefighter Owned & Operated · CSIA Certified Dryer Exhaust Technicians",
  social: {
    facebook: "https://www.facebook.com/lintprosinc",
    google: null,
  },
};

export const trustItems = [
  { label: "Firefighter Owned", sub: "Local family business" },
  { label: "Since 2010", sub: "Northwest suburbs" },
  { label: "CSIA Certified", sub: "Dryer exhaust techs" },
  { label: "Homes + Businesses", sub: "High use setups too" },
  { label: "Bird Nests + Reruns", sub: "Full vent solutions" },
];

export const specials = [
  {
    title: "Homes",
    sub: "Annual cleanings",
    body: "Single-family homes, townhomes, and condos that need airflow restored and lint removed.",
  },
  {
    title: "Groomers + Salons",
    sub: "High-lint environments",
    body: "Pet facilities, salons, and rehab centers that need more frequent service cycles.",
  },
  {
    title: "Bird Nest Removal",
    sub: "Spring through summer",
    body: "Blocked vents, clogged terminations, and add-on exterior protection when needed.",
  },
  {
    title: "HOA + Multi-Unit",
    sub: "Group proposals",
    body: "Apartments, condos, and shared properties with scheduled building-wide cleanings.",
  },
];

export const services = [
  { slug: "annual-cleaning", name: "Dryer Vent Cleaning", summary: "Annual cleanings for homes that need safer airflow, shorter dry times, and less lint buildup." },
  { slug: "business-service", name: "Business Cleaning", summary: "Pet facilities, salons, spas, and rehab centers with higher lint loads and tighter service cycles." },
  { slug: "multi-unit", name: "HOA + Multi-Unit", summary: "Townhomes, condos, apartments, and property groups that need coordinated proposals and scheduling." },
  { slug: "bird-nests", name: "Bird Nest Removal", summary: "Blocked vents and packed terminations cleared out before the system backs up or overheats." },
  { slug: "vent-reruns", name: "Vent Reruns", summary: "Problem layouts corrected with updated routing and cleaner, safer vent paths." },
  { slug: "defender-cage", name: "Exterior Defender Cage", summary: "Exterior protection that helps keep birds and debris out after the vent is cleared." },
];

export const serviceAreas = [
  { slug: "fox-river-grove", name: "Fox River Grove", county: "McHenry" },
  { slug: "cary", name: "Cary", county: "McHenry" },
  { slug: "crystal-lake", name: "Crystal Lake", county: "McHenry" },
  { slug: "barrington", name: "Barrington", county: "Cook / Lake" },
  { slug: "lake-zurich", name: "Lake Zurich", county: "Lake" },
  { slug: "palatine", name: "Palatine", county: "Cook" },
  { slug: "arlington-heights", name: "Arlington Heights", county: "Cook" },
  { slug: "schaumburg", name: "Schaumburg", county: "Cook / DuPage" },
];

export const whyCallUs = [
  {
    title: "Firefighter-owned and operated",
    body: "Safety-first service from a team built around fire prevention, airflow, and cleaner vent systems.",
  },
  {
    title: "Focused on one thing",
    body: "Dryer vents, bird nests, reruns, and high-lint setups. No generic home-service sprawl.",
  },
  {
    title: "Built for homes and heavy users",
    body: "Single-family homes, groomers, salons, condos, apartments, and property groups.",
  },
];

export const proofItems = [
  {
    title: "2024 Neighborhood Faves",
    sub: "Nextdoor recognition",
    image: "/lintpros-assets/badges/neighborhood-faves.jpg",
  },
  {
    title: "CSIA Certified",
    sub: "Dryer exhaust technician",
    image: "/lintpros-assets/badges/csia.png",
  },
  {
    title: "Chamber Member",
    sub: "Cary-Grove area",
    image: "/lintpros-assets/badges/chamber.jpg",
  },
];
