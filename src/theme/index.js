import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import breakpoints from './breakpoints';
import componentsOverride from './components/overrides';

let theme = createTheme({
  palette,
  typography,
  shadows,
  breakpoints,
});

theme.components = componentsOverride(theme);
theme = responsiveFontSizes(theme);

export default theme;