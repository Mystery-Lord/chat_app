import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#280166',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Tahoma, serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: 0;
          padding: 0;
          background-color: #f0f2f5;
        }
      `,
    },
  },
});

export default theme;
