import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { dukkeWordmark } from "@/components/brand-artwork";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export const alt = site.socialImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [portrait, displayFont, bodyFont] = await Promise.all([
  readFile(join(process.cwd(), "public", profile.image), "base64"),
  readFile(join(process.cwd(), "src/assets/seo/display-bold.ttf")),
  readFile(join(process.cwd(), "src/assets/seo/body-regular.ttf")),
]);
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
        fontFamily: "Body",
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
          width: 730,
          padding: "54px 64px",
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${wordmark}`}
          alt="Dukke"
          width={288}
          height={76}
        />
        <div
          style={{
            display: "flex",
            marginTop: 76,
            fontFamily: "Display",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          {profile.fullName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 38,
            lineHeight: 1.2,
            letterSpacing: -0.5,
          }}
        >
          {profile.tagline}
        </div>
        <div style={{ display: "flex", marginTop: 34, fontSize: 26 }}>
          Frontend · Backend · Cloud
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 54,
            left: 64,
            fontSize: 24,
          }}
        >
          {new URL(site.url).hostname}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Display", data: displayFont, weight: 700, style: "normal" },
        { name: "Body", data: bodyFont, weight: 400, style: "normal" },
      ],
    },
  );
}
