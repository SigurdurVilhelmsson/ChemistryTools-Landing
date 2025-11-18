import { Link } from 'react-router-dom';
import './ToolCard.css';

const ToolCard = ({ tool }) => {
  const { id, title, description, icon, path, status, releaseDate } = tool;

  const getStatusBadge = () => {
    switch (status) {
      case 'available':
        return <span className="status-badge status-available">Tiltækt</span>;
      case 'coming':
        return (
          <span className="status-badge status-coming">
            Væntanlegt {releaseDate && `- ${releaseDate}`}
          </span>
        );
      case 'planned':
        return <span className="status-badge status-planned">Í þróun</span>;
      default:
        return null;
    }
  };

  const CardContent = () => (
    <>
      <div className="tool-icon">
        <span>{icon}</span>
      </div>
      <h3 className="tool-title">{title}</h3>
      <p className="tool-description">{description}</p>
      {getStatusBadge()}
    </>
  );

  if (status === 'available' && path) {
    return (
      <Link to={path} className="tool-card tool-card-clickable">
        <CardContent />
      </Link>
    );
  }

  return (
    <div className={`tool-card ${status !== 'available' ? 'tool-card-disabled' : ''}`}>
      <CardContent />
    </div>
  );
};

export default ToolCard;
