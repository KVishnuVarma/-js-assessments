// src/HeavyComponent.jsx
import React from 'react';

const HeavyComponent = () => {
  return (
    <div>
      <h2>Heavy Component Loaded</h2>
      <p>This component is loaded lazily.</p>
    </div>
  );
};

export default HeavyComponent;
