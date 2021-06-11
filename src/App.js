import logo from './logo.png';
import NavBar from './NavBar'
import Jumbotron from './Jumbotron'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
      {/* This area should link to the first home page of site */}
        <a
          className="App-link"
          href="./navbar"
          target="_blank"
          rel="noopener noreferrer"
          
          
        >
        <button className="button-tertiary" type="submit">
          CLICK TO ENTER
        </button>
        </a>
       
      </header>
      <NavBar />
      <Jumbotron />
    </div>
  );
}

export default App;
