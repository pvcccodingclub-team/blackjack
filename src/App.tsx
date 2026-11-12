import { useDeck } from "./hooks/useDeck.ts";
import { useHand } from "./hooks/useHand.ts";
import "./App.css";

export default function App() {
	const { deck, resetDeck, shuffleDeck, drawCard } = useDeck();
	const { addCard, hand } = useHand();

	return (
		<>
			<div style={{ paddingTop: 10 }}>
				<button type="button" onClick={() => addCard(drawCard())}>
					Draw a card
				</button>
				<button type="button" onClick={resetDeck}>
					Reset deck
				</button>
				<button type="button" onClick={shuffleDeck}>
					Shuffle deck
				</button>
			</div>
			<div>
				{hand.map((card) => (
					<div key={card.value + card.suit}>
						{card.value} of {card.suit}
					</div>
				))}
			</div>
		</>
	);
}
