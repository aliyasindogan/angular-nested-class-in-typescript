export class Address {
  constructor(addressDetail: string, country: string, city: string) {
    (this.addressDetail = addressDetail),
      (this.country = country),
      (this.city = city);
  }
  addressDetail: string;
  country: string;
  city: string;
}
