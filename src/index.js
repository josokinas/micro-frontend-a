import React, { StrictMode } from 'react';
import { render as renderReactDom } from 'react-dom';
import './styles.scss';

if (!window.MFE) window.MFE = {};

const root = document.createElement('div');

window.MFE.A = {
  root,
  render: () =>
    renderReactDom(
      <StrictMode>
        <p>Micro Frontend A</p>
      </StrictMode>,
      root
    ),
};
