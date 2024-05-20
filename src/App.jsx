import React, { useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './components/theme';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

//! Components
import Header from './Header';
import Footer from './Footer';

export default function MiniDrawer() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  // @ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header setMode={setMode} />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
