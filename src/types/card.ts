export const suits = ["hearts", "diamonds", "clubs", "spades"] as const;
export type Suit = (typeof suits)[number];

export const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"] as const;
export type Value = (typeof values)[number];

// NOTE - this is a TypeScript 'type', a way to enforce
// a specific shape of an object
export type Card = {
	value: Value;
	suit: Suit;
};

// JavaScript supports full-on object-oriented classes too, but they
// often add complexity for little gain:
class _Card {
	public value: Value;
	public suit: Suit;

	constructor(value: Value, suit: Suit) {
		this.value = value;
		this.suit = suit;
	}
}
