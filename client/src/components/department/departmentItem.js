import React, { Component } from 'react';
import DepartmentForm from './departmentForm';
import Product from '../protuct/product';
import { Container } from 'semantic-ui-react'

class DepartmentItem extends Component {

  state = {editing: false}

  toggleEdit = () => this.setState({ editing: !this.state.editing })
  
  render(){
    const { department, deleteDepartment, updateDepartment } = this.props;
    return(
      <Container>
    { !this.state.editing ? 
      <>
        <h3>{department.name}</h3>
        <button onClick={() => deleteDepartment(department.id)}>Delete</button>
        <button onClick={() => this.toggleEdit()}>Edit</button>
        <div>
          <Product department_id={department.id}/>
        </div>
      </>
    :
      <DepartmentForm department={department} update={updateDepartment} toggleEdit={this.toggleEdit}/>
    }

  </Container>
    )
  }

}

export default DepartmentItem;