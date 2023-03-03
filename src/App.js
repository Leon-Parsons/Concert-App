import './App.css';
import Musician from './components/Musician';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Musician></Musician>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
