import { useDeck } from "./hooks/useDeck.ts";
import { useHand } from "./hooks/useHand.ts";
import "./App.css";
import { useEffect } from "react";
import Card from "./components/Card.tsx";

export default function App() {
	const { deck, resetDeck, shuffleDeck, drawCard } = useDeck();
	const { addCard, hand } = useHand();

	// NOTE -
	// useEffect runs the function only when something in the array
	// of dependencies (in this case just `resetDeck`) changes
	// (in this case, only once)
	useEffect(() => {
		resetDeck();
	}, [resetDeck]);

	return (
		<>
			<p>The deck has {deck.length} card(s).</p>
			<div style={{ paddingTop: 10 }}>
				<button
					type="button"
					onClick={() => {
						addCard(drawCard());
					}}
				>
					Draw a card
				</button>
				<button type="button" onClick={shuffleDeck}>
					Shuffle deck
				</button>
				<button type="button" onClick={resetDeck}>
					Reset deck
				</button>
			</div>
			<div>
				{hand.map((card) => (
					// NOTE -
					// `key` helps React remember which item is which in a list
					<Card key={card.value + card.suit} card={card} />
				))}
			</div>
		</>
	);
}
