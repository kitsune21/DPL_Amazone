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

  render () {
    const { id, name, update } = this.props
    const { editing } = this.state
    return (
      <DepartmentList departments={this.state.departments}/>
    )
  }
}


export default Department;