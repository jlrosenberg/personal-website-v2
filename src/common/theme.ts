import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#e04343`,
    },
    secondary: {
      main: `#FFE800`,
    },

    text: {
      primary: `#353535`,
      secondary: `#a1a9b0`,
    },
  },

  typography: {
    h6: {
      fontWeight: 500,
      letterSpacing: 1.7,
      fontSize: `1.15rem`,
    },
  },
});

export default theme;
