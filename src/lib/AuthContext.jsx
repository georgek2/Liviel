import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [navigateToLogin, setNavigateToLogin] = useState(() => () => {});

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = async () => {
      try {
        // In a real app, this would check for a valid auth token
        // or make an API call to verify the user's session
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoadingAuth(false);
        setIsLoadingPublicSettings(false);
      } catch (error) {
        setAuthError({ type: 'auth_required' });
        setIsLoadingAuth(false);
        setIsLoadingPublicSettings(false);
      }
    };

    checkAuth();
  }, []);

  const value = {
    isLoadingAuth,
    isLoadingPublicSettings,
    authError,
    navigateToLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};