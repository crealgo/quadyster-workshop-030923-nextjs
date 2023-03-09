import {ThemeProvider, GlobalStyles, CssBaseline, createTheme, css} from '@mui/material'

const defaultTheme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyles styles={css`
        body {
          background-color: #CCCCCC
        }
      `} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
