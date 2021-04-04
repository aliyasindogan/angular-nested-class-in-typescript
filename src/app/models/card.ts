export class Card {
  constructor(cardID: string, cardTypeID: number) {
    this.cardID = cardID;
    this.cardTypeID = cardTypeID;
  }
  cardID: string;
  cardTypeID: number;
}
