import React from 'react';

const Categories = (props) => {
  return <button className="filter-btn" onClick = {() => {props.handleClick(props.cate)}}>{props.cate}</button>;
};

export default Categories;
 