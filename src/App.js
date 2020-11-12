import './App.css';
import CommentList from './components/class';

let writers = [
  { id: 1, name: "Dan", lastName: "Brown" },
  { id: 2, name: "Joanne", lastName: "Rowling" },
  { id: 3, name: "Stephen", lastName: "King" }
];
function App() {

  return (
    <div className="App">
      <CommentList></CommentList>
    </div>
  );
}

export default App;
