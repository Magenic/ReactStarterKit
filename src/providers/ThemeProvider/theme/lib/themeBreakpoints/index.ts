import {breakpoints} from '../../../configs';

export interface ThemeBreakpoints {
  [key: string]: number;
  mobile: number;
  tablet: number;
  desktop: number;
  monitor: number;
}

export const themeBreakpoints: ThemeBreakpoints = {
  mobile: breakpoints.xs,
  tablet: breakpoints.md,
  desktop: breakpoints.lg,
  monitor: breakpoints.xl,
};

export default themeBreakpoints;
