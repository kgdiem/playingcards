import { createDeck, createDecks, Deck, suits } from "./cards";

describe("createDeck", () => {
  let deck: Deck;

  beforeEach(() => {
    deck = createDeck();
  });

  it("Should return 52 cards", () => {
    expect(deck.length).toBe(52);
  });

  describe("Creates 4 of each card in each suit", () => {
    it("Should have 4 aces", () => {
      const aces = deck.filter((card) => card.val === "A");

      const cardsuits = aces.map((card) => card.suit);

      expect(aces.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 kings", () => {
      const kings = deck.filter((card) => card.val === "K");

      const cardsuits = kings.map((card) => card.suit);

      expect(kings.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 queens", () => {
      const queens = deck.filter((card) => card.val === "Q");

      const cardsuits = queens.map((card) => card.suit);

      expect(queens.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 jacks", () => {
      const jacks = deck.filter((card) => card.val === "J");

      const cardsuits = jacks.map((card) => card.suit);

      expect(jacks.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 10s", () => {
      const cards = deck.filter((card) => card.val === "10");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 9s", () => {
      const cards = deck.filter((card) => card.val === "9");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 9s", () => {
      const cards = deck.filter((card) => card.val === "9");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 8s", () => {
      const cards = deck.filter((card) => card.val === "8");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 7s", () => {
      const cards = deck.filter((card) => card.val === "7");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 6s", () => {
      const cards = deck.filter((card) => card.val === "6");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 5s", () => {
      const cards = deck.filter((card) => card.val === "5");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 4s", () => {
      const cards = deck.filter((card) => card.val === "4");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 3s", () => {
      const cards = deck.filter((card) => card.val === "3");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });

    it("Should have 4 2s", () => {
      const cards = deck.filter((card) => card.val === "2");

      const cardsuits = cards.map((card) => card.suit);

      expect(cards.length).toBe(4);
      expect(cardsuits).toEqual(suits);
    });
  });
});

describe("createDecks", () => {
  it("Creates mutliple decks", () => {
    const deck = createDecks(8);

    expect(deck.length).toBe(416);
  });

  it("Creates 1 by default", () => {
    const deck = createDecks();

    expect(deck.length).toBe(52);
  });
});
