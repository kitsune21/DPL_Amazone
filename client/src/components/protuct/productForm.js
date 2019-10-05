import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ProductForm extends Component {
  state = { name: '' }

  componentDidMount() {
    if (this.props.id) {
      this.setState({ name: this.props.name })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.update(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.add(this.state)
    }
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state 
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
        {/* <Form.Input 
          required
          placeholder='Price'
          type="text"
          label='price'
          name='price'
          value={price}
          onChange={this.handleChange}
        />
        <Form.Input 
          required
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
          onChange={this.handleChange} */}
        />
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    )
  }
}

export default ProductForm;