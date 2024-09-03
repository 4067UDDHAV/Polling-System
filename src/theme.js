import { createTheme } from "@material-ui/core";

var primary = "#3473ab";
var secondary = "#00abe9";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    fontFamily: `"Roboto", sans-serif`,
    fontSize: 16,
  },
});

export default theme;
