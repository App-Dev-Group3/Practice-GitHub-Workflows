import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="home">
        <header className="home-header">
          <h1>Welcome to the Home Page</h1>
          <Routes>
            <Route path="/" element={<h2>This is the home page content.</h2>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
