import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import colorData from './data/color-data.json';
import { ColorProvider } from './components/color-hooks';

export const ColorContext = createContext();

ReactDOM.render(
  <ColorProvider>
    <App></App>
  </ColorProvider>,
  // <ColorContext.Provider value={{ colorData }}>
  //   <App />
  // </ColorContext.Provider>,
  document.getElementById('root')
);
