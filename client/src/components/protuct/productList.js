import React from 'react';
import ProductItem from './../protuct/productItem';

const ProductList = ({products}) => (
  <div>
    {
      products.map( product =>
        <ProductItem key={product.id} product={product}/>  
      )
    }
  </div>
)

export default ProductList;