import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'App/App';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to get the root element.');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
