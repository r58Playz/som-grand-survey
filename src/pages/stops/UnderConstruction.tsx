import { css, type Component } from "dreamland/core"
import { Stop } from "../../Stop"
import { Icon } from "m3-dreamland";
import construction from "@ktibow/iconset-material-symbols/construction";

export let UnderConstructionStop: Component = function() {
	return (
		<div>
			<Stop title="Exhibits Under Construction">
				<div class="construction">
					<Icon icon={construction} />
				</div>
				<div>
					We apologize for the lack of exhibits showcasing <i>Hacklantis Island</i>.
					We need to send our employees out to collect fresh information after our databases were... erm... <b>vitrified</b>... by the explosion.
					More exhibits will be coming as soon as possible!
				</div>
			</Stop>
		</div>
	)
}
UnderConstructionStop.style = css`
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
