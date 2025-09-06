import { css, type Component, type ComponentChild } from "dreamland/core";
import { Button, Card, Icon } from "m3-dreamland";
import openInNew from "@ktibow/iconset-material-symbols/open-in-new";

export let Stops: Component<{ grid: boolean, children: ComponentChild }> = function(cx) {
	return <div class:grid={use(this.grid)}>{cx.children}</div>
}
Stops.style = css`
	:scope {
		margin: 1rem 0;

		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.grid {
		grid-template-areas: "a" "b" "c";
	}
	.grid > :global(:nth-child(1)) { grid-area: a; }
	.grid > :global(:nth-child(2)) { grid-area: b; }
	.grid > :global(:nth-child(3)) { grid-area: c; }

	@media (min-width: 550px) and (max-width: 800px) {
		:scope {
			grid-template-columns: 1fr 1fr;
		}

		.grid {
			grid-template-areas:
				"a b"
				"c c";
		}
	}
`;

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
