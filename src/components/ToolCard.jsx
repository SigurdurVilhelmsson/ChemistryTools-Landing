import { useUserRole } from '../contexts/UserRoleContext';
import './ToolCard.css';

const ToolCard = ({ tool }) => {
  const { title, description, icon, externalUrl, status, releaseDate } = tool;
  const { isAuthenticated } = useUserRole();

  /**
   * Handle navigation to external tool apps
   */
  const handleClick = () => {
    if (!isAuthenticated) {
      alert('Vinsamlegast skráðu þig inn til að nota verkfærin');
      return;
    }

    if (status !== 'available' || !externalUrl) {
      return;
    }

    // Navigate to external app - it will read auth and role from localStorage
    window.location.href = externalUrl;
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

  const isClickable = status === 'available' && externalUrl;

  return (
    <div
      className={`tool-card ${isClickable ? 'tool-card-clickable' : ''} ${status !== 'available' ? 'tool-card-disabled' : ''}`}
      onClick={isClickable ? handleClick : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyPress={isClickable ? (e) => e.key === 'Enter' && handleClick() : undefined}
    >
      <CardContent />
    </div>
  );
};

export default ToolCard;
