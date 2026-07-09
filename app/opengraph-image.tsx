import { ImageResponse } from "next/og";

export const alt = "Buen Rollo Escapes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site-wide fallback OG image - individual pages can add their own
// opengraph-image.tsx later (e.g. per-property with real photography).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e3a34",
          color: "#faf6ef",
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: "50%",
            background: "#bad6be",
            color: "#1e3a34",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          BR
        </div>
        <div style={{ fontSize: 64, fontWeight: 700 }}>Buen Rollo Escapes</div>
        <div style={{ fontSize: 30, marginTop: 16, color: "#bad6be" }}>
          Good vibes travel well.
        </div>
      </div>
    ),
    { ...size },
  );
}
