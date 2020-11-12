import logo from './logo.svg';
import './App.css';
import CounterWrapper from './Counter';
import Button from './Button';
import ButtonFn from './ButtonFn';
import WriterList from './Writters';
import MyForm from './Form';
import StateForm from './StateForm';

let writers = [
  { id: 1, name: "Dan", lastName: "Brown" },
  { id: 2, name: "Joanne", lastName: "Rowling" },
  { id: 3,name: "Stephen", lastName: "King" }
];
function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <CounterWrapper></CounterWrapper> */}
      {/* <Button></Button> */}
      {/* <ButtonFn startVal={0}></ButtonFn> */}
      {/* <WriterList data={writers} ></WriterList> */}
      {/* <MyForm></MyForm> */}
      <StateForm></StateForm>
    </div>
  );
}

export default App;
