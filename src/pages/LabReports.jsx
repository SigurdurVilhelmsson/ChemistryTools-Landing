import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ToolPage.css';

const LabReports = () => {
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
          <div className="tool-icon-large">🧪</div>
          <h1>Aðstoð við skýrslugerð</h1>
          <p className="tool-subtitle">
            AI-knúin endurgjöf fyrir efnafræðiskýrslur
          </p>
        </div>

        <div className="tool-content">
          <div className="placeholder-message">
            <h2>Verkfærið verður hlaðið hér</h2>
            <p>
              Þetta er staðgengill fyrir skýrslugerðarverkfærið. Hér verður hægt að hlaða upp
              skýrslum og fá endurgjöf frá gervigreind um uppbyggingu, málfar og vísindalega
              nákvæmni.
            </p>
            <p>
              Eiginleikar sem koma:
            </p>
            <ul className="feature-list-simple">
              <li>Hlaða upp PDF eða Word skjölum</li>
              <li>Greining á uppbyggingu skýrslu</li>
              <li>Endurgjöf á málfari og stafsettningu</li>
              <li>Athugasemdir við vísindalega nákvæmni</li>
              <li>Tillögur að úrbótum</li>
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

export default LabReports;
