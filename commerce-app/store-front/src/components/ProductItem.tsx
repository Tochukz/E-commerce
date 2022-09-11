import React from "react";
import { stripHtml } from 'string-strip-html';
import Product from "../models/product";

type ProductItemProp = {
  product: Product
}

const ProductItem: React.FC<ProductItemProp> = function({ product }) {

  return (
    <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
      <div className="card-header">{ product.name }</div>
      <div className="card-body">
        <div>
          <img src={product.image?.url} style={{width: '100%'}}/>
        </div>
        <h4 className="card-title">{ product.price.formatted_with_symbol }</h4>
        <p className="card-text"> { stripHtml(product.description).result } </p>
      </div>
    </div>
  )
}

export default ProductItem;