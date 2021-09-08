import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Header = () => {
  const { path } = useRouteMatch();

  return (
    <nav className="header">
      <Link to={path}><h3>{'<'}</h3></Link>
    </nav>
  );
};

export default Header;
