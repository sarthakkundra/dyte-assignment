import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import URLState from './context/URLState';

ReactDOM.render(
  <React.StrictMode> 
    <URLState>
  <ChakraProvider>
    <App />
    </ChakraProvider>
    </URLState>
  </React.StrictMode>,
  document.getElementById('root')
);

