export const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

export const HEARTS = 0;
export const DIAMONDS = 1;
export const CLUBS = 2;
export const SPADES = 3;

export interface Card {
  val: string;
  actualVal: number;
  suit: string;
}

export type Deck = Card[];

export function createDeck(): Deck {
  let suit;
  let deck = [];

  for (let i = 1; i < 11; i++) {
    for (let j = 0; j < 4; j++) {
      suit = suits[j];

      if (i == 1) {
        deck.push({
          val: "A",
          actualVal: 1,
          suit,
        });

        deck.push({
          val: "J",
          actualVal: 10,
          suit,
        });

        deck.push({
          val: "Q",
          actualVal: 10,
          suit,
        });

        deck.push({
          val: "K",
          actualVal: 10,
          suit,
        });
      } else {
        const actualVal = i;

        deck.push({
          val: String(actualVal),
          actualVal: actualVal,
          suit,
        });
      }
    }
  }

  return deck;
}

export function createDecks(n: number = 1) {
  let deck: Deck = [];

  for (let i = 0; i < n; i++) {
    deck = deck.concat(createDeck());
  }

  return deck;
}
