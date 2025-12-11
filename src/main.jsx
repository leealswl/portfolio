import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import Loader from './components/Loader/Loader';
import './index.css';

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Loader finishLoading={() => setIsLoading(false)} />
  ) : (
    <App />
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root container missing');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
