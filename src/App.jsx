import { useState, useMemo, useEffect } from 'react';
import { createTheme, styled, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from './Header';
import { getDesignTokens } from './components/theme';
import { Outlet } from 'react-router-dom';


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
      <Box sx={{ display: 'flex' }}>
        <Header setMode={setMode}/>
        
        <Outlet/>
      </Box>
    </ThemeProvider>
  );
}