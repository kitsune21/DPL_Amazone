import React from 'react';
import Product from '../../components/protuct/product';
import { Link } from 'react-router-dom';

const DepartmentItem = ({department}) => (
  <div>
    <br />
    <p>{department.name}</p>
    <br />
    <Product department_id={department.id} />
  </div>
)

export default DepartmentItem;