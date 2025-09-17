import { css, type Component } from "dreamland/core";
import { Route, router, Router } from "dreamland/router";
import { Home } from "./pages/home";
import { Featured } from "./pages/featured";

let url: string | undefined;
export let base: string;
if (import.meta.env.SSR) {
	base = ""
} else {
	/* @vite-ignore */
	let path = new URL("../", import.meta.url).pathname;
	base = path.slice(1, path.length - 1);
}

let App: Component<{}, { root: HTMLElement }> = function(cx) {
	cx.init = () => {
		if (import.meta.env.SSR) {
			router.route(url, "http://127.0.0.1:5173");
		} else {
			router.route();
		}
	}

	return (
		<div id="app" class="m3dl-colon3 m3dl-font-body-large">
			<Router>
				<Route path={base}>
					<Route show={<Home />} />
					<Route path="featured" show={<Featured />} />
				</Route>
			</Router>
		</div>
	)
}
App.style = css`
	:scope {
		background: rgb(var(--m3dl-color-background));
		color: rgb(var(--m3dl-color-on-background));
		font-family: var(--m3dl-font);

		overflow-y: auto;
	}
	:scope > :global(*) {
		max-width: 62rem;
		padding: 1rem;
		margin: auto;
	}
`;

export default (path?: string) => {
	url = path;
	return <App />;
}
