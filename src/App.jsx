import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRoleProvider } from './contexts/UserRoleContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <UserRoleProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserRoleProvider>
  );
}

export default App;
