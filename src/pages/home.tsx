import { css, type Component } from "dreamland/core";
import { Button, Card, Icon } from "m3-dreamland";
import openInNew from "@ktibow/iconset-material-symbols/open-in-new-rounded";
import arrowForward from "@ktibow/iconset-material-symbols/arrow-forward-rounded";
import code from "@ktibow/iconset-material-symbols/code";

let som = "./som.webp";
let skulk = "./skulk.webp";
let stickerlode3 = "./stickerlode-3.webp"

import { Emoji } from "../Utils";
import { PorplePointStop } from "./stops/PorplePoint";
import { GiftShopStop } from "./stops/GiftShop";
import { Stops } from "../Stop";
import { router } from "dreamland/router";

export let Home: Component = function() {
	return (
		<div>
			<div class="m3dl-font-display-small title"><img src={som} /> Mount Kablooey Summit</div>
			<div class="m3dl-font-title-large"><b><i>enjoy the view...</i></b></div>
			<div class="top">
				<div class="content">
					<p>
						Welcome to the official Mount Kablooey Summit visitor center!
						We're so high up that you can see almost the entire island,

						(including all the airplanes failing to land at <b>http://island</b>'s airport <Emoji src={skulk} />)

						so we recommend planning your next visits from here with our information and featured exhibits.
						However, we're still reconstructing after that massive <i>volcano explosion</i>; please don't mind the lack of exhibits and artifacts as we recover...
					</p>
					<p>
						Heidi visited us recently and gave us this awesome sticker of her on Mount Kablooey to give out specifically on 15-09-2025; not sure why that date though, maybe it's a special event?
					</p>
				</div>
				<img class="sticker" src={stickerlode3} />
			</div>

			<div class="m3dl-font-headline-medium"><b>Nearby Stops</b></div>
			<Stops grid={true}>
				<GiftShopStop />
				<PorplePointStop />
				<div class="more">
					<div>
						<div class="m3dl-font-title-large"><b>Featured Stops</b></div>
						There's a lot more to explore on the island!
						We've curated a seperate exhibition area to showcase all the cool places to visit.
					</div>
					<Button variant="filled" size="m" on:click={() => router.navigate("./featured")}>View featured <Icon icon={arrowForward} /></Button>
				</div>
			</Stops>

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
	.top {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.top .content {
		flex: 1;
	}
	.sticker {
		height: 200px;
		object-fit: cover;
	}

	.title img {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}

	.more {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.more > div {
		flex: 1;
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
		.about-content {
			grid-template-columns: 1fr;
		}
		.sticker {
			height: 150px;
		}
	}

	@media (max-width: 550px) {
		.about-content {
			grid-template-columns: 1fr;
		}

		.top {
			flex-direction: column-reverse;
		}
		.sticker {
			margin-top: 1rem;
			height: 150px;
		}

		.cards {
			flex-direction: column;
		}
	}
`;
