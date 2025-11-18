import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Kennslutól með gervigreind</h1>
          <p className="hero-subtitle">
            Efnafræðiverkfæri fyrir nemendur og kennara
          </p>
          <p className="hero-description">
            Nýttu kraft gervigreindar til að styðja við nám og kennslu í efnafræði.
            Öll verkfærin eru þróuð sérstaklega fyrir nemendur og kennara við Kvennaskólann í Reykjavík.
          </p>
          <div className="hero-actions">
            <a href="#tools" className="btn-primary btn-large">
              Skoða verkfæri
            </a>
            <Link to="/about" className="btn-secondary btn-large">
              Lesa meira
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
