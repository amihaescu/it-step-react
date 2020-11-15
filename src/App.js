import './App.css';
import CommentList from './components/class';
import SignUpForm from './forms/sign-up';
import LoginForm from './forms/login';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Main from './components/main';
function App() {

  return (
    <div className="App container">

      {/* <CommentList></CommentList> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <LoginForm></LoginForm> */}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/comments" component={CommentList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
