/** Single source for name, address, and market phrasing. Keep footer, schema, and metadata in lockstep. */

export const CONCORD = {
  id: "concord",
  schemaName: "ArvinTech — Concord",
  label: "San Francisco & Bay Area",
  street: "785 Oak Grove Rd. Suite E2",
  city: "Concord",
  region: "CA",
  postalCode: "94518",
  country: "US",
  lines: ["785 Oak Grove Rd. Suite E2, Concord CA 94518"],
  areaServed: ["Concord CA", "East Bay", "San Francisco Bay Area"],
} as const

export const WALLA_WALLA = {
  id: "walla-walla",
  schemaName: "ArvinTech — Walla Walla",
  label: "Walla Walla & Tri-Cities, Washington",
  street: "3838 Pranger Road",
  city: "Walla Walla",
  region: "WA",
  postalCode: "99362",
  country: "US",
  lines: ["3838 Pranger Road, Walla Walla WA 99362"],
  areaServed: [
    "Walla Walla WA",
    "Tri-Cities WA",
    "Kennewick WA",
    "Pasco WA",
    "Richland WA",
    "Walla Walla County",
    "Benton County",
    "Franklin County",
  ],
} as const

export const LOCATIONS = [CONCORD, WALLA_WALLA] as const

export const MARKETS_TITLE = "Bay Area & Tri-Cities"
export const MARKETS_SHORT = "the Bay Area, Walla Walla, and Tri-Cities WA"
export const MARKETS_SENTENCE =
  "Concord, the Bay Area, Walla Walla, and the Tri-Cities of Washington (Kennewick, Pasco, and Richland)"
