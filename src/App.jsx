import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRoleProvider } from './contexts/UserRoleContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LabReports from './pages/LabReports';
import AITutor from './pages/AITutor';
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
              <Route path="/lab-reports" element={<LabReports />} />
              <Route path="/ai-tutor" element={<AITutor />} />
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
