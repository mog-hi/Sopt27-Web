import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {ThemeProvider} from "styled-components";
import * as theme from "./config/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    < App/>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
