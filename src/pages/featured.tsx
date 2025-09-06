import { css, type Component } from "dreamland/core";
import { Slack } from "../Utils";
import { Stops } from "../Stop";
import { IslandStop } from "./stops/Island";
import { UnderConstructionStop } from "./stops/UnderConstruction";
import { Button, Icon } from "m3-dreamland";

import arrowBack from "@ktibow/iconset-material-symbols/arrow-back-rounded";

let som = "./som.webp";

export let Featured: Component = function() {
	return (
		<div>
			<div class="m3dl-font-display-small title"><img src={som} /> Mount Kablooey Summit</div>
			<div class="m3dl-font-headline-medium"><b>Featured Stops</b></div>
			<p>
				We've curated a special exhibition area for stops that our lead curator, <Slack id="U07UY5CR7U5">Toshit</Slack>, finds cool or fun.
				We urge all our visitors to give these stops a visit! They're guaranteed to be awesome.
			</p>
			<Stops grid={false}>
				<IslandStop />
				<UnderConstructionStop />
			</Stops>
			<Button variant="filled" size="m" on:click={() => location.href = "./"}><Icon icon={arrowBack} /> Return to lobby</Button>
		</div>
	)
}
Featured.style = css`
	.title img {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}
`;
