import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Users from './Pages/Users/Users';
import NotFound from './Pages/NotFound/NotFound';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/*" element={<NotFound />} />
        </Routes >
      </div>
    </div >
  );
}

function Navigation() {
  return (
    <nav>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/users">Users</Link>
    </nav>
  )
}

export default App;
