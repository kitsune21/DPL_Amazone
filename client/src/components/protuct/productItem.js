import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import ProductForm from './productForm';
import Product from './product';

class ProductItem extends Component {

  state = {editing: false}

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
    const {product, deleteProduct, updateProduct} = this.props;
    return(
      <Card>
    { !this.state.editing ? 
      <>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>Description: {product.description}</p>
        <img src={product.image} alt="Very pretty picture" />
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
        <button onClick={() => this.toggleEdit()}>Edit</button>
      </>
    :
      <ProductForm product={product} update={updateProduct} toggleEdit={this.toggleEdit}/>
    }

  </Card>
    )
  }

}

export default ProductItem;