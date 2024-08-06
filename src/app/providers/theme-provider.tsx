"use client";

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../utilities/theme';

export default function ThemeProviderComponent({children}: {children: React.ReactNode}) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </div>
  )
}
