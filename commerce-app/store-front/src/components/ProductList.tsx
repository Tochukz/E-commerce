import React from 'react';
import Product from '../models/product';
import ProductItem from './ProductItem';

type ProductListProp = {
  products: Product[],
  onAddToCart: Function,
}

const ProductList: React.FC<ProductListProp> = function({ products, onAddToCart }) {
  return (
    <div className="row">
      { products.map(product => 
        <div className="col-sm-3" key={product.id}>
          <ProductItem  product={product} onAddToCart={onAddToCart} />
        </div>
      )}
    </div>
  )
} 

export default ProductList;