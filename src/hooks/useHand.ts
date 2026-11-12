import { useCallback, useState } from "react";
import type { Card } from "../types/card";

export function useHand() {
	const [hand, setHand] = useState<Card[]>([]);

	const addCard = useCallback((card: Card) => {
		setHand((hand) => [...hand, card]);
	}, []);

	return { addCard, hand };
}
