import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import DepartmentList from './departmentList';
import DepartmentForm from './departmentForm';
import axios from 'axios';

class Department extends Component {
  state = { editing: false, departments: [] }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  componentDidMount() {
    axios.get('/api/departments')
      .then( res => {
        this.setState({departments: res.data})
      })
  }

  addDepartment = (department) => {
    axios.post(`/api/departments/`, {department})
      .then( res => {
        const { departments } = this.state;
        this.setState({ departments: [...departments, res.data]})
      })
      .catch( res => {
        debugger
      })
  }

  updateDepartment = (department, name) => {
    axios.put(`/api/departments/${department.id}/`, {name})
      .then( res => {
        const departments = this.state.departments.map( p => {
          if( p.id === department.id)
            return res.data
          return p
        })
        this.setState({ departments, })
      })
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}/`)
      .then( res => {
        const { departments } = this.state;
        this.setState({ departments: departments.filter( p => p.id !== id )})
      })
  }

  render () {
    const { id, name, update } = this.props
    const { editing } = this.state
    return (
      <>
        <h2>Add Department</h2>
        <DepartmentForm add={this.addDepartment}/>
        <DepartmentList departments={this.state.departments} updateDepartment={this.updateDepartment} editing={editing} toggleEdit={this.toggleEdit} deleteDepartment={this.deleteDepartment}/>
      </>
    )
  }
}


export default Department;