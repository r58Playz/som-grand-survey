import { css, type Component } from "dreamland/core";

export let Emoji: Component<{ src: string }> = function() {
	return <img src={use(this.src)} />;
}
Emoji.style = css`
	:scope {
		height: 1.25em;
		width: 1.25em;
		vertical-align: -0.25em;
	}
`;
