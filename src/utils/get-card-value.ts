import { Card } from "../types/card";

export function getCardValue(card: Card): number {
    if (card.value === "J") return 10;
    if (card.value === "Q") return 10;
    if (card.value === "K") return 10;
    
    if (card.value === "A") {
        // TODO -
        // this is probably where we should check the player's hand
        // so we can determine whether their aces are 1 or 11
        return 11;
    }
    
    return card.value;
}