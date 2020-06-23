import React from 'react';
import {ColorItem, ColorPalette} from 'providers/StorybookProvider/helpers';

import colors from '.';

export default {
  title: 'Configs/Colors',
};

export const Colors = () => (
  <ColorPalette title="Colors">
    {Object.keys(colors).map(color => (
      <ColorItem
        title={color}
        subtitle={`colors.${color}`}
        colors={[colors[color].light, colors[color].main, colors[color].dark]}
      />
    ))}
  </ColorPalette>
);
