// Entry program for make.fun "news-image-20261125" (Node 22, standard library only).
// The artwork is the entry.png shipped beside this file: a one-page summary of the
// world news of Wednesday 25 November 2026. The grader runs this program with no
// network in a fresh container; all it has to do is deliver the image, unchanged,
// to the output directory as entry.png.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
