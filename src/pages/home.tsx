import { css, type Component, type ComponentChild } from "dreamland/core";
import { Button, Card, Icon } from "m3-dreamland";
import openInNew from "@ktibow/iconset-material-symbols/open-in-new";
import code from "@ktibow/iconset-material-symbols/code";

import som from "/som.webp?url";
import skulk from "/skulk.webp?url";

import { Emoji } from "../Emoji";
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
		height: 100%;
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
			<div class="about-content">
				<div class="info">
					This center is built with the <code>dreamland.js</code> JavaScript framework, which was rewritten from scratch during Journey v1, Journey v2, and Summer of Making.
					It's been prerendered and hydrated client-side with <code>dreamland.js</code>'s <b>built-in SSR support</b> and Vite integrations (developed during Summer of Making).
					Components from <code>m3-dreamland</code>, rewritten during Summer of Making to support <code>dreamland.js</code>'s rewrite, were used to give this center a very <i>expressive</i> (possibly even a little <b>material</b>-like) look.
					Assets and fonts from the Summer of Making website were used as well. Each destination's exhibit uses assets from the location.
				</div>
				<div class="cards">
					<Card variant="outlined">
						<div class="m3dl-font-title-large">dreamland.js</div>
						<div class="expand">
							<div>
								Utilitarian web framework smaller than preact.
							</div>
							<div>
								This is the first user-accessible project on Summer of Making!
								It's also used by <a href="https://mail.hackclub.com" target="_blank">mail.hackclub.com</a>'s admin UI.
							</div>
						</div>
						<div class="buttons">
							<Button variant="tonal" icon="full" on:click={() => window.open("https://github.com/MercuryWorkshop/dreamlandjs")}>
								<Icon icon={code} />
							</Button>
							<Button variant="filled" on:click={() => window.open("https://summer.hackclub.com/projects/3")}>
								<Icon icon={openInNew} />
								Visit on SoM!
							</Button>
						</div>
					</Card>
					<Card variant="outlined">
						<div class="m3dl-font-title-large">m3-dreamland</div>
						<div class="expand">
							A Material 3 (Expressive) component library for dreamland.js.
						</div>
						<div class="buttons">
							<Button variant="tonal" icon="full" on:click={() => window.open("https://github.com/r58Playz/m3-dreamland")}>
								<Icon icon={code} />
							</Button>
							<Button variant="filled" on:click={() => window.open("https://summer.hackclub.com/projects/8235")}>
								<Icon icon={openInNew} />
								Visit on SoM!
							</Button>
						</div>
					</Card>
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
	.about-content {
		display: grid;
		grid-template-columns: 3fr 5fr;
		gap: 1rem;
	}

	.cards {
		display: flex;
		gap: 0.5rem;
	}
	.cards > :global(.m3dl-card) {
		flex: 1;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.cards .buttons {
		display: flex;
		gap: 0.5rem;
		justify-content: flex-end;
	}

	.expand { flex: 1; }

	@media (min-width: 550px) and (max-width: 800px) {
		.stops {
			grid-template-columns: 1fr 1fr;
		}

		.about-content {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 550px) {
		.about-content {
			grid-template-columns: 1fr;
		}

		.cards {
			flex-direction: column;
		}
	}
`;
