import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loader from './components/Loader/Loader';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Loader finishLoading={() => setIsLoading(false)} />
  ) : (
    <App />
  );
}

root.render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter> 
    <Root />
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
