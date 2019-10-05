import React from 'react';
import DepartmentItem from './departmentItem';

const DepartmentList = ({departments}) => (
  <div>
    {
      departments.map( department =>
        <DepartmentItem key={department.id} department={department}/>  
      )
    }
  </div>
)

export default DepartmentList;