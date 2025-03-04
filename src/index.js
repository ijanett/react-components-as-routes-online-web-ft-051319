import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';

import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      {/* <Route exact path='/' render={() => <h1>Home!</h1>} /> */}
      <Route exact path='/' component={Home} />
      <Route exact path="/about" component={About} />
      <br />
      <br />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
