import { ImageResponse } from "next/og";
import { home } from "@/data/home";

export const alt = "Isaac De La Rosa — frontend and analytics engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#22c55e" }}>/isaacrosa</div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {home.name}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 34, color: "#a1a1aa" }}>
          {home.headline}
        </div>
      </div>
    ),
    { ...size },
  );
}
