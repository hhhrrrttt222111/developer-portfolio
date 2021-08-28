import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
