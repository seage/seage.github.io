import Album from './Album';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#314d7f",
    },
    secondary: {
      main: "#e37844", // "#f48149",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Album />
    </ThemeProvider>
  );
}

export default App;
