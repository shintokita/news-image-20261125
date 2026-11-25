// Entry program for make.fun "news-image-20261125" (Node 22, standard library only).
// The artwork is the entry.png shipped beside this file: a one-page summary of the
// world news of Wednesday 25 November 2026. The grader runs this program with no
// network in a fresh container; all it has to do is deliver the image, unchanged,
// to the output directory as entry.png.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Read the artwork once and sanity-check it against the gate's own limits
// (a whole PNG, at most 1 MiB) before delivering it, so a truncated or
// swapped file fails loudly here instead of silently at the gate.
const image = readFileSync(join(here, "entry.png"));
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const isPng = PNG_SIGNATURE.every((byte, i) => image[i] === byte);
if (!isPng) throw new Error("entry.png is not a PNG file");
if (image.length > 1_048_576) throw new Error("entry.png exceeds the 1 MiB cap");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), image);
