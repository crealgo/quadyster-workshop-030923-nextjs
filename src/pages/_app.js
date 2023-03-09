import {ThemeProvider, CssBaseline, createTheme} from '@mui/material'

const defaultTheme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
