import { css, type Component } from "dreamland/core"
import { Stop } from "../../Stop"

import island from "/stops/island/island.webp?url";
import plane from "/stops/island/plane.webp?url";

export let IslandStop: Component = function() {
	return (
		<Stop title="http://island" target={19}>
			<div class="rich-image">
				<marquee direction="right" scrollamount={10}>
					<img src={plane} />
					<div><span class="pull-up">terrain! PULL UP!!</span></div>
				</marquee>
			</div>
			<div>
				A small island in the middle of the ocean, home to a small population (currently about 5 people).
				500ft<sup>2</sup> in size with a tropical climate. Residents are English-speaking and use the Beenz currency and the Internet Time timezone.
			</div>
		</Stop>
	)
}
IslandStop.style = css`
	.rich-image {
		position: relative;

		height: 100%;
		background: url(${island});
		background-size: cover;
		background-position: center;

		overflow: hidden;
	}

	marquee {
		position: absolute;
		top: 25%;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		transform: rotate(2deg);
	}
	
	marquee img {
		width: 25%;
	}

	.pull-up {
		background: rgb(var(--m3dl-color-surface-container) / 0.5);
		padding: 0 0.25rem;
		border-radius: var(--m3dl-shape-extra-small);
	}
`;
