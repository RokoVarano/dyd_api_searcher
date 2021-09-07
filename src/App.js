import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './redux/categories';
import List from './components/List/List';

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
      render={() => <List categories={item.category.results} />}
    />
  ));

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <List categories={mainList} />} />
        {listRoutes(mainList)}
      </Switch>
    </Router>
  );
}

export default App;
