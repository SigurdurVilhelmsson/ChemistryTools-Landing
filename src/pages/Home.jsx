import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';
import { useUserRole } from '../contexts/UserRoleContext';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useUserRole();
  const tools = [
    {
      id: 'lab-reports',
      title: 'Aðstoð við skýrslugerð',
      description: 'AI-knúin endurgjöf fyrir efnafræðiskýrslur',
      icon: '🧪',
      path: '/lab-reports',
      status: 'available'
    },
    {
      id: 'ai-tutor',
      title: 'Aðstoðarkennari í efnafræði',
      description: 'Gagnvirkur aðstoðarkennari í efnafræði byggður á gervigreind',
      icon: '🤖',
      path: '/ai-tutor',
      status: 'coming',
      releaseDate: 'Janúar 2026'
    },
    {
      id: 'future-tool',
      title: 'Framtíðarverkfæri',
      description: 'Fleiri verkfæri í þróun',
      icon: '⚗️',
      path: '',
      status: 'planned'
    }
  ];

  return (
    <div className="home">
      <Hero />

      {!isAuthenticated && (
        <div className="auth-prompt">
          <div className="container">
            <div className="auth-prompt-content">
              <p>Skráðu þig inn með skólareikningnum þínum til að nota verkfærin</p>
            </div>
          </div>
        </div>
      )}

      <section id="tools" className="tools-section">
        <div className="container">
          <div className="section-header">
            <h2>Tiltæk verkfæri</h2>
            <p className="section-subtitle">
              Veldu verkfæri til að byrja að vinna með gervigreind í efnafræðinni
            </p>
          </div>

          <div className="tools-grid">
            {tools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Tilbúin/n að byrja?</h2>
            <p>
              Skráðu þig inn með þínu @kvenno.is netfangi til að fá aðgang að öllum verkfærunum.
            </p>
            <p className="cta-note">
              Öll gögn eru unnin á öruggan hátt og ekki geymd.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
