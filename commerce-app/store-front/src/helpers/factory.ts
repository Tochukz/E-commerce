import ICart from "../interfaces/iCart"

export const createCart = (): ICart => {
  return {
    id: '',
    created: 0,
    updated: 0,
    expires: 0,
    total_items: 0,
    total_unique_items: 0,
    subtotal: {
      raw: 0,
      formatted: '',
      formatted_with_symbol: '',
      formatted_with_code: ''
    },
    hosted_checkout_url: '',
    meta: {},
    line_items: [],
    discount_code: 0,
    currency: {
      code: '',
      symbol: ''
    },
    discount: []
  }
}