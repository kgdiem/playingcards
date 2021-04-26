export function shuffle(cards: any[]) {
  let shuffledCards = cards.slice();

  let indexInDeck = shuffledCards.length - 1;

  let randomNumber, swap;

  for (indexInDeck; indexInDeck >= 0; indexInDeck--) {
    randomNumber = getRandomNumber(indexInDeck);

    swap = shuffledCards[randomNumber];

    shuffledCards[randomNumber] = shuffledCards[indexInDeck];

    shuffledCards[indexInDeck] = swap;
  }

  return shuffledCards;
}

export function doubleShuffle(cards: any[]) {
  return shuffle(shuffle(cards));
}

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * (max || 1));
}
