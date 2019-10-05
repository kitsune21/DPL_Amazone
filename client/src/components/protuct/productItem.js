import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({product}) => (
  <div>
    <p>{product.name}</p>
  </div>
)

export default ProductItem;