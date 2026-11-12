// NOTE -
// just like Python, you can rename an import in TypeScript too
// if it conflicts or just makes more sense to do so
import type { Card as CardType } from "../types/card";

export default function Card({ card }: { card: CardType }) {
	return (
		<p>
			<b>{card.value}</b> of <b>{card.suit}</b>
		</p>
	);
}
