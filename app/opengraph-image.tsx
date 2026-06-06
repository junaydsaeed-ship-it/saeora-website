import { ImageResponse } from "next/og";

export const alt = "Saeora — Influencer Marketing Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1d1d1b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#9E7C5C",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 32,
            fontFamily: "sans-serif",
          }}
        >
          Influencer Marketing Agency
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 100,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          SAEORA
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: 22,
            marginTop: 32,
            fontFamily: "sans-serif",
          }}
        >
          We make influencer marketing simple.
        </div>
      </div>
    ),
    { ...size }
  );
}
