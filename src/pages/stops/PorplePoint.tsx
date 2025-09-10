import { css, type Component } from "dreamland/core"
import { Stop } from "../../Stop"
import { Icon } from "m3-dreamland";
import globeLocationPin from "@ktibow/iconset-material-symbols/globe-location-pin-rounded";

export let PorplePointStop: Component = function() {
	return (
		<div>
		<Stop title="Porple Point" target={98}>
			<div class="construction">
				<Icon icon={globeLocationPin} />
			</div>
			<div>
				Porple Point's exhibit is currently being constructed!
				Our most senior employee is currently out on an expedition collecting data to display here.
				We aim to provide our visitors with info about Porple Point as soon as possible!
				For now, you can trek down and visit it yourself; we don't provide any guarantees about what's there, however.
			</div>
		</Stop>
		</div>
	)
}
PorplePointStop.style = css`
	.construction {
		height: 100%;

		background: repeating-linear-gradient(
			45deg,
			rgb(var(--m3dl-color-surface-container-high)),
			rgb(var(--m3dl-color-surface-container-high)) 20px,
			transparent 20px,
			transparent 40px
		);

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 8rem;
	}
`;
