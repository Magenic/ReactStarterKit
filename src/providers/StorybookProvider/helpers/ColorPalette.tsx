import React from 'react';
import styled from 'styled-components/macro';
import {ComponentWithChildren} from 'lib/@types';

interface ColorPaletteProps extends ComponentWithChildren {
  title?: string;
}

const ColorPaletteContainer = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #999;
  padding: 1rem;
  border-radius: 3px;
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular',
    'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  background-color: #fff;
  margin: 1rem;
`;

const ColorPaletteHeaders = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  font-weight: 700;
  color: rgba(51, 51, 51, 0.6);
`;

const ColorPalleteNameHeader = styled.div`
  flex: 0 0 30%;
`;

const ColorPalleteSwatchesHeader = styled.div`
  flex: 1;
`;

const ColorPalleteTitle = styled.h3`
  margin-bottom: 14px;
  border-bottom: 1px solid #999;
  font-size: 1.5em;
  color: #333333;
  font-weight: 900;
  line-height: 32px;
`;

export const ColorPalette = ({children, title}: ColorPaletteProps) => {
  return (
    <ColorPaletteContainer>
      <ColorPalleteTitle>{title}</ColorPalleteTitle>
      <ColorPaletteHeaders>
        <ColorPalleteNameHeader>Name</ColorPalleteNameHeader>
        <ColorPalleteSwatchesHeader>Swatches</ColorPalleteSwatchesHeader>
      </ColorPaletteHeaders>
      {children}
    </ColorPaletteContainer>
  );
};

export default ColorPalette;
