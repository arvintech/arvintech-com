import { ImageResponse } from "next/og"

export const alt = "ArvinTech — Managed IT and AI Automation, Bay Area, Walla Walla, and Tri-Cities WA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f172a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: "#00A94F" }} />
          <div style={{ width: 36, height: 36, background: "#0066B3" }} />
          <div style={{ width: 36, height: 36, background: "#FFC107" }} />
          <div style={{ width: 36, height: 36, background: "#E31937" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#00A94F",
              marginBottom: 20,
            }}
          >
            ArvinTech
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            Managed IT and AI Automation
          </div>
          <div style={{ fontSize: 28, color: "#cbd5e1", marginTop: 24 }}>
            Concord, Walla Walla, and the Tri-Cities · since 2000
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
