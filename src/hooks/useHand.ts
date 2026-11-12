import { useCallback, useMemo, useState } from "react";
import type { Card } from "../types/card";
import { getCardValue } from "../utils/get-card-value";

export function useHand() {
	const [hand, setHand] = useState<Card[]>([]);

	// NOTE -
	// useMemo is like useEffect, but for values that get calculated
	const handValue = useMemo(() => {
		return hand.reduce((acc, card) => {
			return acc + getCardValue(card);
		}, 0);
	}, [hand]);

	// NOTE -
	// useCallback is like useEffect, but for functions
	const addCard = useCallback((card: Card) => {
		setHand((hand) => [...hand, card]);
	}, []);

	return { hand, handValue, addCard };
}
