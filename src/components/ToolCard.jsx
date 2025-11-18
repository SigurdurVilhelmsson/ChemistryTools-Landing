import { Link } from 'react-router-dom';
import { useUserRole } from '../contexts/UserRoleContext';
import './ToolCard.css';

const ToolCard = ({ tool }) => {
  const { id, title, description, icon, path, status, releaseDate } = tool;
  const { role, isAuthenticated } = useUserRole();

  /**
   * Determine navigation behavior based on tool and user role
   */
  const handleClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      alert('Vinsamlegast skráðu þig inn til að nota verkfærin');
      return;
    }

    if (status !== 'available') {
      e.preventDefault();
      return;
    }

    // For Lab Reports, navigate to external subdirectory with role indicator
    if (id === 'lab-reports') {
      e.preventDefault();
      // Navigate to separate app - it will read auth from localStorage
      const targetPath = role === 'teacher' ? '/lab-reports/teacher' : '/lab-reports/student';
      window.location.href = targetPath;
    }

    // For future internal tools, use React Router (Link component handles this)
  };

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
      <Link to={path} className="tool-card tool-card-clickable" onClick={handleClick}>
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
