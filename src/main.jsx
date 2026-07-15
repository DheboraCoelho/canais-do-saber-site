import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Mantenha apenas o CSS global aqui
import "./styles/global.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);