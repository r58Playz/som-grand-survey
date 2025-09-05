import { defineConfig } from "vite";
import { devSsr } from "dreamland/vite";

import theme from "./theme";

export default defineConfig({
	plugins: [
		devSsr({
			entry: "/src/main-server.ts",
			transform(html) {
				return html.replace("<!--dl-theme-->", `<style>${theme()}</style>`);
			}
		}),
	],
});
