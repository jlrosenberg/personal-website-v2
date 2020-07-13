import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import theme from './common/theme';
import Home from './containers/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
