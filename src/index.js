import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles.scss';

(async () => {
  render(
    <StrictMode>
      <p>Micro Frontend A</p>
    </StrictMode>,
    document.getElementById('root')
  );
})();
