import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthProvider> {/* Wrap App with AuthProvider */}
    <App />
  </AuthProvider>
);
