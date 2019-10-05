import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import ProductList from '../protuct/productList';
// import ProductForm from './productForm';
import axios from 'axios';

class Product extends Component {
  state = { editing: false, products: [] }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  componentDidMount() {
    axios.get(`/api/departments/${this.props.department_id.toString()}/products`)
      .then( res => {
        this.setState({products: res.data})
      })
  }

  render () {
    const { id, name, update } = this.props
    const { editing } = this.state
    return (
      <ProductList products={this.state.products}/>
    )
  }
}


export default Product;