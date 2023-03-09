import {ThemeProvider, GlobalStyles, CssBaseline, createTheme, css} from '@mui/material'

const defaultTheme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyles styles={css`
        :root {
          --small-padding: 0.5rem;
          --content-spacing: 1rem;
        }

        body {
          background-color: #CCCCCC;
        }
      `} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
