import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import './Loader.style.css';


export default function Loader({ finishLoading }) {
    return (
      <div className="loader">
        <Helmet bodyAttributes={{ class: 'hidden' }} />
        <div
          className="logo-wrapper"
          onAnimationEnd={finishLoading} 
        >
          <svg
          className="loader-circle"
          width="600"
          height="600"
          viewBox="0 0 600 600"
        >
          <circle cx="300" cy="300" r="260" />
        </svg>
          <h1 id="logo" className="logo-text">
            "Hello World !"
          </h1>
        </div>
      </div>
    );
  }
  
  Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
  };