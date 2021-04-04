import { Address } from "./address";
import { Card } from "./card";
import { User } from "./user";

export class UserDto {
  constructor(user: User, address: Address[], card: Card) {
    this.user = user;
    this.address = address;
    this.card = card;
  }
  user: User;
  address: Address[];
  card: Card;
}

