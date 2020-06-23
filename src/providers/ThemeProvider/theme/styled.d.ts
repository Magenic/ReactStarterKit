import 'styled-components/macro';
import {ThemeColors, ThemeBreakpoints, FontSize, FontFamily} from './lib';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: ThemeBreakpoints;
    color: ThemeColors;
    fontFamily: FontFamily;
    fontSize: FontSize;
  }
}
