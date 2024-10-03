import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25015E',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: "Gluten",
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
