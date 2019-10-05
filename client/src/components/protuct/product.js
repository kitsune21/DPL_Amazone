import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Post from './Post';
import PostForm from './PostForm';

class Product extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/products')
      .then( res => {
        this.setState({ products: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  renderProduct = () => {
    return this.state.products.map( post => <Product key={product.id} {...product} update={this.updateProduct} deleteProduct={this.deleteProduct} />)
  }

  addPost = (product) => {
    axios.product('/api/products', { product })
      .then( res => {
        const { products } = this.state 
        this.setState({ productts: [...products, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  updateProduct = (id, product) => {
    axios.put(`/api/products/${id}`, { product } )
      .then( res => {
        const products = this.state.products.map( p => {
          if (p.id === id)
            return res.data
          return p
        })
        this.setState({ products })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`)
      .then( res => {
        const { products } = this.state
        this.setState({ products: products.filter( p => p.id !== id) })
      })
  }

  render() {
    return (
      <>
        <Header>Product Name</Header>
        <ProductForm add={this.addProduct} />
        { this.renderProduct() }
      </>
    )
  }
}

export default Product;