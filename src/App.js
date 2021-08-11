import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Main} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
