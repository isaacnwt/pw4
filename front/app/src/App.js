import './App.css';
import { Login } from './components/Login';
import { Welcome } from './components/Welcome/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
