# PlayingCards

Deck of cards + a fisher-yates shuffler

## Usage

```
import { createDeck, createDecks, shuffle, doubleShuffle } from 'playingcards'
// Create a single, 52 card deck
let deck = createDeck();

// Create a casino deck
let deck = createDecks(8);

// Shuffle deck
const shuffled = shuffle(deck);

// Shuffle twice
const doubleShuffled = doubleShuffle(deck);
```

## Testing

`npm run test`

## Build

`npm run build`
