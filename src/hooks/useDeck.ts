import { useCallback, useState } from "react";
import { type Card, suits, values } from "../types/card";

export function useDeck() {
	const [deck, setDeck] = useState<Card[]>([]);

	const resetDeck = useCallback(() => {
		const newDeck: Card[] = [];
		for (const suit of suits) {
			for (const value of values) {
				newDeck.push({ value, suit });
			}
		}
		setDeck(newDeck);
	}, []);

	const shuffleDeck = useCallback(() => {
		const newDeck = [...deck];
		for (let i = newDeck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
		}
		setDeck(newDeck);
	}, [deck]);

	const drawCard = useCallback(() => {
		const card = deck.pop();
		if (!card) {
			throw new Error("No cards in deck");
		}
		return card;
	}, [deck]);

	return { deck, resetDeck, shuffleDeck, drawCard };
}
