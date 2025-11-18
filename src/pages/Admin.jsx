import { useUserRole } from '../contexts/UserRoleContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

export default function Admin() {
  const { isTeacher, isAuthenticated } = useUserRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !isTeacher) {
      navigate('/');
    }
  }, [isAuthenticated, isTeacher, navigate]);

  if (!isTeacher) return null;

  return (
    <div className="admin-page">
      <div className="container">
        <h1 className="admin-title">Stjórnunarspjald</h1>

        <div className="admin-card">
          <h2 className="admin-card-title">Kennaraverkfæri</h2>
          <p className="admin-description">
            Hér munu stjórnunarverkfæri birtast í framtíðinni:
          </p>
          <ul className="admin-features-list">
            <li>Bæta við og breyta tilraunum</li>
            <li>Stjórna aðgangi nemenda</li>
            <li>Skoða notkunartölur</li>
            <li>Breyta stillingunum</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
