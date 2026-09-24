// Regenerate the production viewers from the authored specs, preserving Archify's runtime.
// ARCHIFY_CLI can point to a different local installation of the skill.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(source, "../../..");
const cli =
  process.env.ARCHIFY_CLI ||
  resolve(homedir(), ".agents/skills/archify/bin/archify.mjs");
const ids = [
  "modular-monolith",
  "ports-adapters",
  "event-driven",
  "cloud-topology",
  "aws-platform",
  "request-lifecycle",
];
mkdirSync(resolve(root, "docs/architecture"), { recursive: true });
mkdirSync(resolve(root, "public/assets/architecture"), { recursive: true });

for (const id of ids) {
  const input = resolve(source, `${id}.json`);
  const { diagram_type: type } = JSON.parse(readFileSync(input, "utf8"));
  const output = resolve(root, `docs/architecture/${id}.html`);
  const receipt = execFileSync(
    process.execPath,
    [cli, "deliver", type, input, output, "--quality", "showcase", "--json"],
    { encoding: "utf8" },
  );
  writeFileSync(resolve(root, `docs/architecture/${id}.receipt.json`), receipt);
  const html = readFileSync(output, "utf8").replace(
    "</head>",
    `
    <meta name="robots" content="noindex,follow">
    <link rel="stylesheet" href="/assets/architecture/viewer.css">
    <script src="/assets/architecture/viewer-bridge.js" defer></script>
  </head>`,
  );
  writeFileSync(resolve(root, `public/assets/architecture/${id}.html`), html);
  console.log(`${id}: validated and generated`);
}
