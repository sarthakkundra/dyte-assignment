import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import URLState from './context/URLState';

ReactDOM.render(
  <React.StrictMode resetCSS> 
  <ChakraProvider>
  <URLState>
    <App />
    </URLState>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

