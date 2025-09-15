import { css, type Component } from "dreamland/core"
import { Button, Icon } from "m3-dreamland";

import apparel from "@ktibow/iconset-material-symbols/apparel";
import localCafe from "@ktibow/iconset-material-symbols/local-cafe";
import mail from "@ktibow/iconset-material-symbols/mail";
import key from "@ktibow/iconset-material-symbols/key";

import { Stop } from "../../Stop"

export let GiftShopStop: Component = function() {
	let buy = (item: string) => () => {
		// TODO snackbar
		alert("Go buy a " + item + "!");
	};

	return (
		<div>
			<Stop title="Mount Kablooey Gift Shop" target={11}>
				<div class="rich-image m3dl-gift-shop">
					<div class="shop">
						<div><Button variant="elevated" icon="full" size="m" on:click={buy("Mug")}><Icon icon={localCafe} /></Button></div>
						<div><Button variant="elevated" icon="full" size="m" on:click={buy("T-Shirt")}><Icon icon={apparel} /></Button></div>
						<div class="weird"><Button variant="elevated" icon="full" size="m" on:click={buy("Postcard")}><Icon icon={mail} /></Button></div>
						<div class="weird2"><Button variant="elevated" icon="full" size="m" on:click={buy("Keychain")}><Icon icon={key} /></Button></div>
					</div>
				</div>
				<div>
					The official Mount Kablooey Gift Shop is a great place to get your usual bits and bobs like shirts and mugs.
					Speaking of, why is the branded mug $35?? The whole shop seems to be very expensive... except for the keychain.
					That's reasonably priced at $2. I guess the visitor center needs to start selling stuff for cheaper; a new revenue source, at last!
				</div>
			</Stop>
		</div>
	)
}
GiftShopStop.style = css`
	.rich-image {
		height: 100%;

		background: url(./stops/gift-shop/background.webp);
		background-size: cover;
		background-position: center;

		display: flex;
		align-items: center;
		justify-content: center;

		color: rgb(var(--m3dl-color-on-surface));
	}

	.shop {
		width: 60%;
		aspect-ratio: 1 / 1;

		background: url(./stops/gift-shop/shop.webp);
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;

		padding: 6%;

		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
	}

	.shop > * {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.weird {
		margin-right: 10%;
		margin-bottom: 10%;
	}

	.weird2 {
		margin-right: 10%;
		margin-bottom: 15%;
	}
`;
