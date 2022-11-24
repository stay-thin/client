import logo from './logo.svg';
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './login/Login';
import Register from './login/Register';
import Reset from './login/Reset';
import Dashboard from './login/Dashboard';

function App() {
  return (
    <div className="app">
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
