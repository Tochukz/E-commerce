import React from 'react';
import Product from '../models/product';
import ProductItem from './ProductItem';

type ProductListProp = {
  products: Product[]
}

const ProductList: React.FC<ProductListProp> = function({ products }) {
  return (
    <div className="row">
      { products.map(product => 
        <div className="col-sm-3" key={product.id}>
          <ProductItem  product={product} />
        </div>
      )}
    </div>
  )
} 

export default ProductList;