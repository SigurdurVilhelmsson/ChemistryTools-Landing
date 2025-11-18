import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { user, login, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    try {
      login(email, name);
      setShowLoginModal(false);
      setEmail('');
      setName('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <div className="logo-circle">K</div>
              <span className="logo-text">Kvennaskólinn</span>
            </Link>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
                Heim
              </Link>
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
                Um verkfærin
              </Link>
              <a href="#help" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Hjálp
              </a>
            </nav>

            <div className="header-actions">
              {isAuthenticated ? (
                <div className="user-section">
                  <span className="user-name">Velkomin/n, {user.name}</span>
                  <button className="btn-secondary btn-sm" onClick={handleLogout}>
                    Útskrá
                  </button>
                </div>
              ) : (
                <button className="btn-primary" onClick={() => setShowLoginModal(true)}>
                  Skrá inn með Microsoft
                </button>
              )}
            </div>

            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <nav className="mobile-nav">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Heim
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                Um verkfærin
              </Link>
              <a href="#help" onClick={() => setIsMenuOpen(false)}>
                Hjálp
              </a>
            </nav>
            {isAuthenticated ? (
              <div className="mobile-user">
                <p>Velkomin/n, {user.name}</p>
                <button className="btn-secondary" onClick={handleLogout}>
                  Útskrá
                </button>
              </div>
            ) : (
              <button className="btn-primary" onClick={() => {
                setShowLoginModal(true);
                setIsMenuOpen(false);
              }}>
                Skrá inn með Microsoft
              </button>
            )}
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Skrá inn</h2>
            <p className="modal-subtitle">Notaðu þitt @kvenno.is netfang</p>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="name">Nafn (valfrjálst)</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nafn þitt"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Netfang *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nafn@kvenno.is"
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowLoginModal(false)}>
                  Hætta við
                </button>
                <button type="submit" className="btn-primary">
                  Skrá inn
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
