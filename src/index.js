import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ChakraProvider
} from "@chakra-ui/react";

import { BrowserRouter } from 'react-router-dom';
import theme from "./theme"
import { ColorModeScript } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
