import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <h2>Loading...</h2>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;