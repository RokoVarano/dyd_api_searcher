import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRockets());
  // }, []);

  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
