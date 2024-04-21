import { useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './components/theme';
import { Outlet } from 'react-router-dom';

import './master.css'
import './header-footer.css'

//! Components
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';

export default function MiniDrawer() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  // @ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
        <Header setMode={setMode}/>
        <Outlet/>
        <Footer />
    </ThemeProvider>
  );
}