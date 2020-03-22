import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import '/app/node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
	    <Link to="/">
  		<Button renderas="button">
    			<span>Home</span>
  		</Button>
	    </Link>
          </li>
          <li>
	    <Link to ="/about">
		<Button renderas="button">
			<span>About</span>
		</Button>
	    </Link>
          </li>
          <li>
	    <Link to="/dashboard">
		<Button renderas="button">
			<span>Dashboard</span>
		</Button>
	    </Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="App">
	<div className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h2>Home</h2>
	</div>
	<p className="App-intro">
		Say what
	</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get yo little self started, edit <code>src/App.js</code> and save to reload.
        </p>
	<Button variant="primary" size="lg">Test GETTER</Button>
      </div>
    );
  }
}

export default App;
*/
