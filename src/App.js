import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there
        </p>
        <a
          className="App-link"
          href="https://geauxaudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Geaux Audio
        </a>
      </header>
    </div>
  );
}

export default App;
