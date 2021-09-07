import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import capFirst from '../../utilities';

const List = (props) => {
  const { url } = useRouteMatch();
  const { categories } = props;

  const categoriesJSX = (categories) => categories.map((category) => {
    const name = category.key ? category.key : category.index;
    const address = category.key ? category.key : `${url}/${category.index}`;
    const count = category.category ? <p>{`${category.category.count} items`}</p> : null;

    return (

      <Link to={`${address}`} key={name}>
        <h3>{capFirst(name)}</h3>
        { count }
      </Link>

    );
  });

  return (
    <>
      { categoriesJSX(categories) }
    </>
  );
};

List.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
