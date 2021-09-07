import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import capFirst from '../../utilities';

const List = () => {
  const categories = useSelector((state) => state.categories);

  const categoriesJSX = (categories) => categories.map((category) => (
    <Link to={category.key} key={category.key}>
      <h3>{capFirst(category.key)}</h3>
      <p>{`${category.category.count} items`}</p>
    </Link>
  ));

  return (
    <>
      { categoriesJSX(categories) }
    </>
  );
};

export default List;
