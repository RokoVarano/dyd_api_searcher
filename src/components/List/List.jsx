import React from 'react';
import {
  Link, Route, useRouteMatch, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import capFirst from '../../utilities';

const List = (props) => {
  const { url, path } = useRouteMatch();
  const { categories } = props;

  const categoriesJSX = (categories) => categories.map((category) => {
    const name = category.key ? category.key : category.index;
    const address = category.key ? category.key : `${url}/${category.index}`;
    const count = category.category ? <p>{`${category.category.count} items`}</p> : null;

    return (
      <Switch key={name}>
        <Route exact path={path}>
          <Link to={`${address}`} key={name}>
            <h3>{capFirst(name)}</h3>
            { count }
          </Link>
        </Route>
        <Route path={`${path}/${category.index}`}>{category.url}</Route>
      </Switch>

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
