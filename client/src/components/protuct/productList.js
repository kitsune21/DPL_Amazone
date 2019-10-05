import React from 'react';
import ProductItem from './../protuct/productItem';

const ProductList = ({products, deleteProduct, updateProduct, editing, toggleEdit}) => (
  <div>
    {
      products.map( product =>
        <ProductItem key={product.id} product={product} updateProduct={updateProduct} toggleEdit={toggleEdit} editing={editing} deleteProduct={deleteProduct}/>  
      )
    }
  </div>
)

export default ProductList;