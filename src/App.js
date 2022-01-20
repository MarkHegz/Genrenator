import './App.css';
import RandomGenre from './RandomGenre.js';


function App() {

  return (
    <div className="wrapper">
      <header>
        <h1>Genrenator</h1>
      </header>
      <main>
          <h2>Click the button below to explore a random genre</h2>
        < RandomGenre />
      </main>
      <footer>
          <p>Created at&nbsp;<a href="https://junocollege.com/">Juno College</a></p>
      </footer>
    </div>

  );
}

export default App;
