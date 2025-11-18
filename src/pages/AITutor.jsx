import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ToolPage.css';

const AITutor = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="tool-page">
        <div className="container">
          <div className="auth-required">
            <div className="auth-icon">🔒</div>
            <h2>Innskráning nauðsynleg</h2>
            <p>Þú þarft að skrá þig inn með þínu @kvenno.is netfangi til að nota þetta verkfæri.</p>
            <Link to="/" className="btn-primary">
              Til baka á forsíðu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tool-page">
      <div className="container">
        <div className="tool-header">
          <div className="tool-icon-large">🤖</div>
          <h1>Aðstoðarkennari í efnafræði</h1>
          <p className="tool-subtitle">
            Gagnvirkur aðstoðarkennari í efnafræði byggður á gervigreind
          </p>
          <div className="coming-soon-badge">
            Væntanlegt í janúar 2026
          </div>
        </div>

        <div className="tool-content">
          <div className="placeholder-message">
            <h2>Verkfærið er í þróun</h2>
            <p>
              Aðstoðarkennarinn verður gagnvirkur spjallbotni sem svarar spurningum þínum um
              efnafræði, útskýrir hugtök og hjálpar þér að skilja flókin efni.
            </p>
            <p>
              Eiginleikar sem koma:
            </p>
            <ul className="feature-list-simple">
              <li>Spjall með gervigreind um efnafræði</li>
              <li>Útskýringar á flóknum hugtökum</li>
              <li>Hjálp við verkefni og dæmi</li>
              <li>Leiðbeiningar um tilraunir</li>
              <li>Persónuleg námsaðstoð</li>
            </ul>
          </div>

          <div className="placeholder-actions">
            <Link to="/" className="btn-secondary">
              Til baka á forsíðu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
