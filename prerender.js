import { dirname, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";

import { renderSsr } from "dreamland/vite";
import { readFile, rm, writeFile } from "node:fs/promises";

import theme from "./theme.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const resolve = (p) => resolvePath(__dirname, p);

const entry = await import(resolve("dist/server/main-server.js"));

entry.default("/");
const paths = entry.router.ssgables();

let template = await readFile("dist/static/index.html", "utf8");

for (const [route, path] of paths) {
	let rendered = await renderSsr(
		template,
		() => entry.default(route)
	);
	rendered = rendered.replace("<!--dl-theme-->", `<style>${theme()}</style>`);

	console.log(
		`prerendered: ${route}\t${(new TextEncoder().encode(rendered).byteLength / 1024).toFixed(2)}kb`
	);
	await writeFile(resolve("dist/static/" + path), rendered);
}

await rm(resolve("dist/static/.vite"), { recursive: true });
