import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './redux/categories';
import List from './components/List/List';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const mainList = useSelector((state) => state.categories);

  const listRoutes = (list) => list.map((item) => (
    <Route
      path={`/${item.key}`}
      key={item.key}
      render={() => (
        <ul className="list">
          <List categories={item.category.results} />
        </ul>
      )}
    />
  ));

  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <ul className="list">
              <li className="main-picture">
                <h1 className="pink-cover"><i className="fab fa-d-and-d fa-4x" /></h1>
              </li>
              <li className="list-separation">
                <h6>DnD API viewer</h6>
              </li>
              <List categories={mainList} mainList />
            </ul>
          )}
        />
        {listRoutes(mainList)}
      </Switch>
    </Router>
  );
}

export default App;
