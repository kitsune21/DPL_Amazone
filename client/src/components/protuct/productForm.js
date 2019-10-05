import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ProductForm extends Component {
  state = { name: '', price: 0, description: '', image: 'https://bit.ly/2oPLnp7'}

  componentDidMount() {
    if (this.props.product) {
      this.setState({ ...this.props.product})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.product) {
      this.props.update(this.state)
      this.props.toggleEdit()
    } else {
      this.props.add(this.state)
    }
    this.setState({ name: '', price: 0, description: '', image: ''})
  }

  render() {
    const { name, price, description, image } = this.state 
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          required
          placeholder='Product Name'
          label='name'
          name='name'
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input 
          required
          placeholder='Price'
          type="number"
          label='price'
          name='price'
          value={price}
          onChange={this.handleChange}
        />
        <Form.Input 
          type="image"
          label='image'
          name='image'
          value={image}
          onChange={this.handleChange}
        />
        <Form.Input 
          required
          placeholder='Description'
          type="TextArea"
          label="description"
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    )
  }
}

export default ProductForm;