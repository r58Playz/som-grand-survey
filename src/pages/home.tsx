import { css, type Component, type ComponentChild } from "dreamland/core";
import { Button, Card, Icon } from "m3-dreamland";
import openInNew from "@ktibow/iconset-material-symbols/open-in-new";
import { Emoji } from "../Emoji";

import som from "/som.webp?url";
import skulk from "/skulk.webp?url";

import { IslandStop } from "./stops/Island";
import { UnderConstructionStop } from "./stops/UnderConstruction";
import { PorplePointStop } from "./stops/PorplePoint";

export let Stop: Component<{ title: string, children: [ComponentChild, ComponentChild], target?: number }> = function(cx) {
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
					{this.target ?
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
						: null}
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

	@media (max-width: 800px) {
		:scope > :global(.m3dl-card) {
			flex-direction: column;
		}

		.image {
			border-radius: 0 0 var(--m3dl-shape-medium) var(--m3dl-shape-medium);
		}
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
				However, we're still reconstructing after that massive <i>volcano explosion</i>; please don't mind the lack of exhibits and artifacts as we recover...
			</p>

			<div class="m3dl-font-headline-medium"><b>Next Stops</b></div>
			<div class="stops">
				<IslandStop />
				<PorplePointStop />
				<UnderConstructionStop />
			</div>

			<div class="m3dl-font-headline-medium about"><b>About This Center</b></div>
			<div>
				<div class="info">
					This center is built with the <code>dreamland.js</code> JavaScript framework, which was rewritten from scratch during Journey v1, Journey v2, and Summer of Making.
					Components from <code>m3-dreamland</code>, rewritten during Summer of Making to support <code>dreamland.js</code>'s rewrite, were used to give this center a very <i>expressive</i> (possibly even <b>material</b>y) look.
					Assets and fonts from the Summer of Making website were used as well. Each destination's exhibit uses assets from the location.
				</div>
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
		margin: 1rem 0;

		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.about {
		margin-bottom: 1rem;
	}

	@media (min-width: 550px) and (max-width: 800px) {
		.stops {
			grid-template-columns: 1fr 1fr;
		}
	}
`;
