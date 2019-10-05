import React from 'react';
import DepartmentItem from './departmentItem';

const DepartmentList = ({departments, addDepartment, updateDepartment, deleteDepartment, editing, toggleEdit}) => (
  <div>
    {
      departments.map( department =>
        <DepartmentItem key={department.id} department={department} updateDepartment={updateDepartment} toggleEdit={toggleEdit} editing={editing} deleteDepartment={deleteDepartment}/>  
      )
    }
  </div>
)

export default DepartmentList;