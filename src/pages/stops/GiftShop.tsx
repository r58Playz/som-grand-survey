import { css, type Component } from "dreamland/core"
import { Icon } from "m3-dreamland";
import gift from "@ktibow/iconset-material-symbols/featured-seasonal-and-gifts-rounded";

import { Stop } from "../../Stop"
import { Slack } from "../../Utils";

export let GiftShopStop: Component = function() {
	return (
		<Stop title="Mount Kablooey Gift Shop" target={11}>
			<div class="construction">
				<Icon icon={gift} />
			</div>
			<div>
				The official Mount Kablooey Gift Shop is a great place to get your usual bits and bobs like shirts and mugs (speaking of... why is the branded mug $35??).
				It's currently going through a rebrand and renovation after the <i>volcano explosion</i> though, so we haven't built the full exhibit yet; ask <Slack id="U091DE0M4NB">peleg2210</Slack> for their progress renovating! 
			</div>
		</Stop>
	)
}
GiftShopStop.style = css`
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
