import { createTheme } from '@mui/material/styles';

declare module '@emotion/react' {
  interface Theme extends ThemeType {}
}

declare module '@mui/material/styles' {
  interface ThemeOptions extends ThemeType {}
}

const themeProperties = {
  opacity: '.5',
  transition: '.2s linear',
};

type ThemeType = typeof themeProperties;

const theme = createTheme(themeProperties);

export default theme;
