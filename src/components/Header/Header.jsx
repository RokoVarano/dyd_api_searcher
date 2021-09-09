import React from 'react';
import {
  Link, useRouteMatch, Switch, Route,
} from 'react-router-dom';
import Filter from '../Filter/Filter';

const Header = () => {
  const { path } = useRouteMatch();

  return (
    <nav className="header">
      <Link to={path} className="back"><h3>{'<'}</h3></Link>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Filter />
          )}
        />
      </Switch>
    </nav>
  );
};

export default Header;
