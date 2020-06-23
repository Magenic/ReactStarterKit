import {pixelsToRem} from 'lib/utils';

export interface FontSize {
  10: string;
  12: string;
  14: string;
  16: string;
  18: string;
  20: string;
}

export const fontSize: FontSize = {
  10: pixelsToRem(10),
  12: pixelsToRem(12),
  14: pixelsToRem(14),
  16: pixelsToRem(16),
  18: pixelsToRem(18),
  20: pixelsToRem(20),
};
