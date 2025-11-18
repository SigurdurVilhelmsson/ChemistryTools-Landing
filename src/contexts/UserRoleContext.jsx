import { createContext, useContext, useState, useEffect } from 'react';
import { getUserRole } from '../config/teachers';

const UserRoleContext = createContext(null);

export function UserRoleProvider({ children }) {
  const [authState, setAuthState] = useState(null);
  const [role, setRole] = useState(null);

  // On mount, check localStorage for existing auth
  useEffect(() => {
    const savedAuth = localStorage.getItem('kvenno_auth');
    if (savedAuth) {
      try {
        const auth = JSON.parse(savedAuth);
        setAuthState(auth);
        setRole(getUserRole(auth.email));
      } catch (e) {
        console.error('Failed to parse saved auth:', e);
        localStorage.removeItem('kvenno_auth');
      }
    }
  }, []);

  const login = (email, name, token) => {
    const userRole = getUserRole(email);
    const auth = {
      email,
      name,
      token,
      role: userRole,
      timestamp: new Date().toISOString()
    };

    // Save to localStorage for other apps to access
    localStorage.setItem('kvenno_auth', JSON.stringify(auth));

    setAuthState(auth);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.removeItem('kvenno_auth');
    setAuthState(null);
    setRole(null);
  };

  return (
    <UserRoleContext.Provider value={{
      authState,
      role,
      isTeacher: role === 'teacher',
      isAuthenticated: !!authState,
      login,
      logout
    }}>
      {children}
    </UserRoleContext.Provider>
  );
}

/**
 * Hook to access current user's role and auth state
 * @returns {{
 *   authState: object | null,
 *   role: 'teacher' | 'student' | null,
 *   isTeacher: boolean,
 *   isAuthenticated: boolean,
 *   login: function,
 *   logout: function
 * }}
 */
export const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (context === undefined) {
    throw new Error('useUserRole must be used within a UserRoleProvider');
  }
  return context;
};
