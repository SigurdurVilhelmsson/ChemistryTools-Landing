import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kvennaskólinn í Reykjavík</h3>
            <p>Efnafræðiverkfæri með gervigreind</p>
            <p className="footer-address">
              Laugavegur 59<br />
              101 Reykjavík
            </p>
          </div>

          <div className="footer-section">
            <h4>Tenglar</h4>
            <ul className="footer-links">
              <li><Link to="/">Heim</Link></li>
              <li><Link to="/about">Um verkfærin</Link></li>
              <li><a href="https://kvenno.is" target="_blank" rel="noopener noreferrer">Kvenno.is</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hjálp og stuðningur</h4>
            <ul className="footer-links">
              <li><a href="#help">Algengar spurningar</a></li>
              <li><a href="#privacy">Persónuvernd</a></li>
              <li><a href="mailto:efnafraeди@kvenno.is">Hafa samband</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Um verkefnið</h4>
            <p className="footer-description">
              Þessi verkfæri eru þróuð til að styðja við nám og kennslu í efnafræði
              með hjálp gervigreindar. Öll gögn eru unnin á öruggan hátt og ekki geymd.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kvennaskólinn í Reykjavík. Allur réttur áskilinn.</p>
          <p className="footer-credit">
            Verkfæri þróuð af efnafræðikennaranum við skólann
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
