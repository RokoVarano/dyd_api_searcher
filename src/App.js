import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './redux/categories';
import List from './components/List/List';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
      </Switch>
    </Router>
  );
}

export default App;
