import Price  from "./price";
import Image from "./image";

export default class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: Price,
    public image: Image
  ) {}
}
