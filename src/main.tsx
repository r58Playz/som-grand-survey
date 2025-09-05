import { css, type Component } from "dreamland/core";
import { Route, Router } from "dreamland/router";
import { Home } from "./pages/home";

export let router: Router;
let url: string | undefined;

let App: Component<{ }, { root: HTMLElement }> = function(cx) {
	router = new Router(
		<Route>
			<Route show={<Home />} />
		</Route>
	);

	cx.init = () => {
		if (import.meta.env.SSR) {
			router.mount(this.root, true);
			router.route(url, "http://127.0.0.1:5173");
		} else {
			router.mount(this.root);
		}
	}

	return (
		<div id="app" class="m3dl-colon3 m3dl-font-body-large"><placeholder this={use(this.root)} /></div>
	)
}
App.style = css`
	:scope {
		background: rgb(var(--m3dl-color-background));
		color: rgb(var(--m3dl-color-on-background));
		font-family: var(--m3dl-font);
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
