import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <div className="nav-brand">MCP Test</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Welcome to MCP Server Test</h1>
        <p className="hero-text">
          A modern React application for testing and development
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </header>
    </div>
  );
}

export default App;
