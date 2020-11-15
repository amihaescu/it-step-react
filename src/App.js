import './App.css';
import CommentList from './components/class';
import SignUpForm from './forms/sign-up';
import LoginForm from './forms/login';
function App() {

  return (
    <div className="App container">
      {/* <CommentList></CommentList> */}
      {/* <SignUpForm></SignUpForm> */}
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
