/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const RetryComponent = ({ children, maxRetries, init }) => {
  const [retries, setRetries] = useState(0);
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    init().catch(() => {
      if (retries < maxRetries) {
        console.log('Initialization failed, retrying...');
        setRetries(retries + 1);
        setKey(Math.random()); // Resets the component by changing its key
      }
    });
  }, [retries, maxRetries, init]);

  if (retries >= maxRetries) {
    return <div>Failed to load component after {maxRetries} retries.</div>;
  }

  return React.cloneElement(children, { key });
};

export default RetryComponent;
