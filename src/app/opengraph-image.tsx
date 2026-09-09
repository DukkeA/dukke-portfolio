import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { dukkeWordmark } from "@/components/brand-artwork";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export const alt = "Andrés Duque (Dukke) — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const portrait = await readFile(
  join(process.cwd(), "public", profile.image),
  "base64",
);
const wordmark = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1288 338" color="#ffff23">${dukkeWordmark}</svg>`,
).toString("base64");

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#d5cfbe",
        color: "#000",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={`data:image/png;base64,${portrait}`}
        alt=""
        width={470}
        height={705}
        style={{
          position: "absolute",
          right: 20,
          top: -20,
          objectFit: "contain",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "54px 64px",
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${wordmark}`}
          alt="Dukke"
          width={470}
          height={123}
        />
        <div style={{ display: "flex", marginTop: 62, fontSize: 34 }}>
          {profile.fullName}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 14,
            fontSize: 70,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -3,
          }}
        >
          <span>Software</span>
          <span>Engineer.</span>
        </div>
        <div style={{ display: "flex", marginTop: 76, fontSize: 24 }}>
          {new URL(site.url).hostname}
        </div>
      </div>
    </div>,
    size,
  );
}
