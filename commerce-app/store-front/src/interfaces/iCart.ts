export default interface ICart {
  id: string,
  created: number,
  updated: number,
  expires: number,
  total_items: number,
  total_unique_items: number,
  subtotal: ISubtotal
  hosted_checkout_url: string,
  meta?: any,
  line_items: any[],
  discount_code: any;
  currency: ICurrency
  discount?: any[]
}

interface ICurrency {
  code: string,
  symbol: string
}

interface ISubtotal {
  raw: number,
  formatted: string,
  formatted_with_symbol: string,
  formatted_with_code: string
}