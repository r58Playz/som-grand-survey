import { css, type Component } from "dreamland/core"
import { Stop } from "../../Stop"

import { Button, Icon } from "m3-dreamland";
import refresh from "@ktibow/iconset-material-symbols/refresh";

let animations = [
	"crab-dancing-blocky",
	"crab-excited",
	"crab-yay",
	"dancing-crab1",
	"dancing-crab2",
	"dancing-crab3",
	"dancing-crab4",
	"minecraft-crab",
	"silly-crab"
];

export let CrabRaveStop: Component<{}, { meta: ({ path: string, x: number, y: number, hue: number })[] }> = function() {
	let generate = () => {
		this.meta = animations.map(x => ({ path: x, x: Math.random() * 100, y: Math.random() * 100, hue: Math.random() * 360 }));
	};
	generate();

	return (
		<div>
			<Stop title="Crab Rave" target={16}>
				<div class="rave">
					<div>
						{use(this.meta).mapEach(x => <img src={`../stops/crab-rave/${x.path}.webp`} style={{ "--x": x.x + "%", "--y": x.y + "%", "--hue": x.hue + "deg" }} />)}
					</div>
					<Button variant="tonal" icon="full" on:click={generate}><Icon icon={refresh} /></Button>
				</div>
				<div>
					The Crab Rave island has daily performances of the "Dance of the Rising Sun", or <b>"Crab Rave"</b> by the local <i>Raving Crabs</i>.
					Scientists do not know exactly why these crabs perform the ritual;
					some argue that it's instinct while others believe the crabs are intelligent and perform more extravagantly when they're being observed.
					In any case, this masterpiece of a performance is a must-watch!
				</div>
			</Stop >
		</div >
	)
}
CrabRaveStop.style = css`
	.rave {
		position: relative;

		height: 100%;
		padding: 0 20% 20% 0;

		background: url(../stops/crab-rave/beach.webp);
		background-size: cover;
		background-position: center;
	}

	.rave > :global(.m3dl-button) {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
	}

	.rave > div {
		height: 100%;
		position: relative;
	}

	.rave > div > * {
		width: 25%;

		animation: hue-cycle 5s linear infinite;
		position: absolute;
		top: var(--x);
		left: var(--y);
	}

	@keyframes hue-cycle {
		from {
			filter: sepia(50%) saturate(1000%) contrast(180%) hue-rotate(var(--hue))
		}
		to {
			filter: sepia(50%) saturate(1000%) contrast(180%) hue-rotate(calc(var(--hue) + 360deg))
		}
	}
`;
