export const suits = ["hearts", "diamonds", "clubs", "spades"] as const;
export type Suit = (typeof suits)[number];

export const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"] as const;
export type Value = (typeof values)[number];

export type Card = {
	value: Value;
	suit: Suit;
};
