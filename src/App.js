import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Players from './Pages/Players/Players';
import Users from './Pages/Users/Users';
import NotFound from './Pages/NotFound/NotFound';
import ErrorBoundary from './Pages/ErrorBoundary/ErrorBoundary';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <div className="App-header">
        <ErrorBoundary>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} >
              <Route path="/about/players" element={<Players />} />
            </Route >
            <Route path="/users" element={<Users />} />
            <Route path="/*" element={<NotFound />} />
          </Routes >
        </ErrorBoundary>
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
