import React from 'react';
import Product from '../../components/protuct/product';
import { Link } from 'react-router-dom';

const DepartmentItem = ({department}) => (
  <div>
    <Link to={'/products'}><p>{department.name}</p></Link>
  </div>
)

export default DepartmentItem;