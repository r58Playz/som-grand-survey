import { css, type Component, type ComponentChild } from "dreamland/core";
import { Button, Card, Icon } from "m3-dreamland";
import openInNew from "@ktibow/iconset-material-symbols/open-in-new";
import { Emoji } from "../Emoji";

import som from "/som.webp?url";
import skulk from "/skulk.webp?url";

import { IslandStop } from "./stops/Island";

export let Stop: Component<{ title: string, children: [ComponentChild, ComponentChild], target: number }> = function(cx) {
	return (
		<div>
			<Card variant="filled" >
				<div class="image">
					{cx.children[0]}
				</div>
				<div class="body">
					<div class="m3dl-font-title-large">{use(this.title)}</div>
					<div class="expand">
						{cx.children[1]}
					</div>
					<div class="buttons">
						<Button
							variant="filled"
							icon="left"
							on:click={() => window.open(`https://isle.a.hackclub.dev/scenes/${this.target}`)}
						>
							<Icon icon={openInNew} />
							Visit!
						</Button>
					</div>
				</div>
			</Card>
		</div>
	)
}
Stop.style = css`
	:scope > :global(.m3dl-card) {
		width: 100%;
		overflow: hidden;

		display: flex;
		padding: 0;
		align-items: stretch;
	}

	.image {
		background: rgb(var(--m3dl-color-surface-container));
		border-radius: 0 var(--m3dl-shape-medium) var(--m3dl-shape-medium) 0;
		aspect-ratio: 4 / 3;
		flex: 3 0;

		overflow: hidden;
	}
	.body {
		padding: 1rem;
		flex: 5;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.expand { flex: 1; }
	.buttons {
		display: flex;
		justify-content: flex-end;
	}
`;

export let Home: Component = function() {
	return (
		<div>
			<div class="m3dl-font-display-small title"><img src={som} /> Mount Kablooey Summit</div>
			<div class="m3dl-font-title-large"><b><i>enjoy the view...</i></b></div>
			<p>
				Welcome to the official Mount Kablooey Summit visitor center!
				We're so high up that you can see almost every other exhibit

				(including all the airplanes failing to land at <b>http://island</b>'s airport <Emoji src={skulk} />)

				so we recommend planning your next visits from here with our information.
				However, we're still reconstructing after that massive <i>volcano</i> explosion; please don't mind the lack of exhibits and artifacts as we recover...
			</p>

			<div class="m3dl-font-headline-medium"><b>Next Stops</b></div>
			<div class="stops">
				<IslandStop />
			</div>
		</div>
	)
}
Home.style = css`
	.title img {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}

	.stops {
		margin-top: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;
