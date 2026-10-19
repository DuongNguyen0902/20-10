import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root');
// Intentionally no StrictMode: the V6 event-driven interaction engine mounts once.
createRoot(root).render(<App />);
