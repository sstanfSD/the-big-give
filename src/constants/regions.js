export const REGIONS = [
  { slug: "ottawa-ottawa-valley", name: "Ottawa, Ottawa Valley" },
  { slug: "gta", name: "GTA" },
  { slug: "quebec", name: "Quebec" },
  { slug: "international", name: "International" },
  { slug: "all-other-communities", name: "all other communities" },
]

export const SLUG_TO_REGION = Object.fromEntries(
  REGIONS.map(r => [r.slug, r.name])
)
