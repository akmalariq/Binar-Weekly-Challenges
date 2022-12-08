import logo from './logo.svg';
import './App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ini halaman todos
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="App-link"
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          className="App-link"
          href="/todos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todos
        </a>
      </header>
    </div>
  );
}

export default About;