import React from 'react';
import {
  Link, Route, useRouteMatch, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import capFirst from '../../utilities';
import Details from '../Details/Details';

const List = (props) => {
  const { path } = useRouteMatch();
  const { categories, mainList } = props;

  const categoriesJSX = (categories) => categories.map((category) => {
    const name = category.key ? category.key : category.index;
    const address = category.key ? category.key : `${path}/${category.index}`;
    const count = category.category ? <p>{`${category.category.count} items`}</p> : null;

    return (
      <li key={name} className={`list-item ${mainList ? 'main-list' : ''}`}>
        <Switch>
          <Route exact path={path}>
            <Link to={`${address}`} key={name}>
              <h4>{capFirst(name)}</h4>
              { count }
            </Link>
          </Route>
          <Route path={`${path}/${category.index}`}>
            <Details apiUrl={category.url} homeUrl={path} />
          </Route>
        </Switch>
      </li>
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
  mainList: PropTypes.bool,
};

List.defaultProps = {
  mainList: false,
};

export default List;
