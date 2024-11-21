/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Components
 */
import App from './App.jsx';

/**
 * CSS link
 */
import './index.css';
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);