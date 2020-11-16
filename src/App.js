import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Comments from './components/comments';
import Main from './components/main';
import NotFound from './components/not-found';
import LoginForm from './forms/login';
import SignUpForm from './forms/sign-up';
import Navbar from './navbar/navbar';

function App() {

  return (
    <div className="App container">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
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
      <h2>Discalimer</h2>
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
    <div>
      We are not responsible for anything that happens here. :D
    </div>
  )
}

function Fr() {
  return (
    <div>"Omellete du fromage :D"</div>
  )
}

export default App;
