import Price  from "../interfaces/iPrice";
import Image from "../interfaces/iImage";

export default class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: Price,
    public image: Image
  ) {}
}
