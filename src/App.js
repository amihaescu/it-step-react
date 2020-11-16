import './App.css';
import Login from './forms/login'
import SignUpForm from './forms/sign-up'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './components/main';
import NotFound from './components/notfound';
import Navbar from './components/navbar';
import Comments from './components/comments';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={Login} />
          <Route path="/comments" component={Comments} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

function Disclaimer() {
  return (
    <div>
      <h2>Disclaimer</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/disclaimer/en">En</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/disclaimer/fr">Fr</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/disclaimer/en" component={En} />
        <Route path="/disclaimer/fr" component={Fr} />
      </Switch>
    </div>
  )
}

function En() {
  return (
    <div>We are not responsible for anything happening on this site.</div>
  )
}

function Fr() {
  return (
    <div>Omellete du fromage</div>
  )
}

export default App;
