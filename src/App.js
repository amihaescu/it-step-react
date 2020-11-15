import './App.css';
import CommentList from './components/class';
import SignUpForm from './forms/sign-up';
import LoginForm from './forms/login';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main';
import NotFound from './components/not-found';
import Discalimer from './disclaimer/disclaimer';
function App() {

  return (
    <div className="App container">

      {/* <CommentList></CommentList> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <LoginForm></LoginForm> */}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/comments" component={CommentList} />
          <Route path="/disclaimer" component={Discalimer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
