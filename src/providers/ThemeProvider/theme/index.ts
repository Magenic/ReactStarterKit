import {DefaultTheme} from 'styled-components/macro';
import {themeColors, themeBreakpoints, fontSize, fontFamily} from './lib';

const theme: DefaultTheme = {
  breakpoint: themeBreakpoints,
  color: themeColors,
  fontFamily,
  fontSize,
};
export default theme;
