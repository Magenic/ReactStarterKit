import React from 'react';
import {ColorItem, ColorPalette} from 'providers/StorybookProvider/helpers';

import {themeColors} from '.';

export default {
  title: 'Theme/Colors',
};

const getThemeObjectPath = (item: string) => 'theme.colors.' + item;

export const Common = () => (
  <ColorPalette title="Common Colors">
    <ColorItem
      title="Black"
      subtitle={getThemeObjectPath('common.black')}
      colors={[themeColors.common.black]}
    />
  </ColorPalette>
);

export const Primary = () => (
  <ColorPalette title="Primary Colors">
    <ColorItem
      title="Light"
      subtitle={getThemeObjectPath('primary.light')}
      colors={[themeColors.primary.light]}
    />
    <ColorItem
      title="Main"
      subtitle={getThemeObjectPath('primary.main')}
      colors={[themeColors.primary.main]}
    />
    <ColorItem
      title="Dark"
      subtitle={getThemeObjectPath('primary.dark')}
      colors={[themeColors.primary.dark]}
    />
  </ColorPalette>
);

export const Background = () => (
  <ColorPalette title="Background Colors">
    <ColorItem
      title="Paper"
      subtitle={getThemeObjectPath('background.paper')}
      colors={[themeColors.background.paper]}
    />
    <ColorItem
      title="App"
      subtitle={getThemeObjectPath('primary.app')}
      colors={[themeColors.background.app]}
    />
  </ColorPalette>
);

export const Text = () => (
  <ColorPalette title="Text Colors">
    <ColorItem
      title="Primary"
      subtitle={getThemeObjectPath('text.primary')}
      colors={[themeColors.text.primary]}
    />
    <ColorItem
      title="Secondary"
      subtitle={getThemeObjectPath('text.secondary')}
      colors={[themeColors.text.secondary]}
    />
    <ColorItem
      title="Hint"
      subtitle={getThemeObjectPath('text.hint')}
      colors={[themeColors.text.hint]}
    />
  </ColorPalette>
);

export const Status = () => (
  <ColorPalette title="Status Colors">
    <ColorItem
      title="Error"
      subtitle={getThemeObjectPath('status.error')}
      colors={[
        themeColors.status.error.light,
        themeColors.status.error.main,
        themeColors.status.error.dark,
      ]}
    />
    <ColorItem
      title="Warning"
      subtitle={getThemeObjectPath('status.warning')}
      colors={[
        themeColors.status.warning.light,
        themeColors.status.warning.main,
        themeColors.status.warning.dark,
      ]}
    />
    <ColorItem
      title="Info"
      subtitle={getThemeObjectPath('status.info')}
      colors={[
        themeColors.status.info.light,
        themeColors.status.info.main,
        themeColors.status.info.dark,
      ]}
    />
    <ColorItem
      title="Success"
      subtitle={getThemeObjectPath('status.success')}
      colors={[
        themeColors.status.success.light,
        themeColors.status.success.main,
        themeColors.status.success.dark,
      ]}
    />
    <ColorItem
      title="Disabled"
      subtitle={getThemeObjectPath('status.disabled')}
      colors={[themeColors.status.disabled]}
    />
  </ColorPalette>
);

export const Shadow = () => (
  <ColorPalette title="Shadow Colors">
    <ColorItem
      title="Shadow"
      subtitle={getThemeObjectPath('shadow')}
      colors={[themeColors.shadow]}
    />
  </ColorPalette>
);

export const All = () => (
  <>
    <Primary />
    <Text />
    <Background />
    <Common />
    <Status />
    <Shadow />
  </>
);
