import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './components/form';
import GraphLabel from './components/graphlabel';
import AnalysisMap from './components/analysismap';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/info">INFO</Link></li>
          <li><Link to="/info">Analytic</Link></li>
        </ul>
        <header className="App-header">
          <img className="logo-header" src={"logo-big.jpg"} alt="logo" />
        </header>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/analytic" component={Analytic} />
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div className="home_container">
      <Form />
      <GraphLabel />
    </div>
  );
}

function Info() {
  return (
    <div>
      <h2>Info</h2>
    </div>
  );
}


function Analytic() {
  return (
    <div>
      <AnalysisMap />
    </div>
  );
}

export default App;
