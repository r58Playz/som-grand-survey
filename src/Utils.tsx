import { css, type Component, type ComponentChild } from "dreamland/core";

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

export let Slack: Component<{ id: string, children: ComponentChild }> = function(cx) {
	return <a href={`https://hackclub.slack.com/app_redirect?channel=${this.id}`} target="_blank">{cx.children}</a>;
}
