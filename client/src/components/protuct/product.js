import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import ProductList from '../protuct/productList';
import ProductForm from './productForm';
import axios from 'axios';

class Product extends Component {
  state = { editing: false, products: [] }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  componentDidMount() {
    axios.get(`/api/departments/${this.props.department_id}/products`)
      .then( res => {
        this.setState({products: res.data})
      })
  }

  addProduct = (product) => {
    axios.post(`/api/departments/${this.props.department_id}/products/`, {product})
      .then( res => {
        const { products } = this.state;
        this.setState({ products: [...products, res.data]})
      })
      .catch( res => {
        debugger
      })
  }

  updateProduct = (product) => {
    axios.put(`/api/departments/${this.props.department_id}/products/${product.id}`, {product})
      .then( res => {
        const products = this.state.products.map( p => {
          if( p.id === product.id)
            return res.data
          return p
        })
        this.setState({ products, })
      })
  }

  deleteProduct = (id) => {
    axios.delete(`/api/departments/${this.props.department_id}/products/${id}`)
      .then( res => {
        const { products } = this.state;
        this.setState({ products: products.filter( p => p.id !== id )})
      })
  }

  render () {
    const { id, name, update } = this.props
    const { editing } = this.state
    return (
      <>
        <h4>Add Product</h4>
        <ProductForm add={this.addProduct}/>
        <ProductList products={this.state.products} updateProduct={this.updateProduct} editing={editing} toggleEdit={this.toggleEdit} deleteProduct={this.deleteProduct}/>
      </>
    )
  }
}


export default Product;