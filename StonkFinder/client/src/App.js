import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

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
	    <Link to="/about">
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
	  <li>
	    <Link to="/test">
		<Button renderas="button">
			<span>Test</span>
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
	  <Route path="/test">
	    <Test />
	  </Route>
        </Switch>
      </div>
    </Router>
  );
}

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

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = { retrieved: [] };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL)
            .then(res => {
                console.log(res.data);
                this.setState({ retrieved: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="wrapper-example">
                <p>We got:</p>
                <p>{this.state.retrieved}</p>
            </div>
        )
    }
}
