import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { ThemeName, themes, ThemeType } from '../styles/themes';
import GlobalStyles from '../styles/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {

  const themeName: ThemeName = 'main';
  const currentTheme: ThemeType = themes[themeName];
  
  return (
    <ThemeProvider theme={currentTheme} >
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
