import React from 'react';
import styled from 'styled-components/macro';

interface ColorItemProps {
  title: string;
  subtitle: string;
  colors: string[];
}

const ColorItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const ColorItemNames = styled.div`
  flex: 0 0 30%;
  line-height: 20px;
  margin-top: 5px;
`;

const ColorItemColors = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const ColorItemTitle = styled.div`
  font-weight: 700;
  color: #333333;
`;

const ColorItemSubtitle = styled.div`
  color: rgba(51, 51, 51, 0.8);
`;

const ColorSwatchColors = styled.div`
  border-radius: 4px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-bottom: 5px;
  overflow: hidden;
`;

const ColorSwatchLabels = styled.div`
  display: flex;
  flex-direction: row;
`;
const ColorSwatchLabel = styled.div`
  flex: 1;
  text-align: center;
  font-size: 12px;
  line-height: 1;
  overflow: hidden;
  color: rgba(51, 51, 51, 0.6);
`;

const ColorSwatch = styled.div<{color: string}>`
  flex: 1;
  background-color: ${props => props.color};
`;

export const ColorItem = ({title, subtitle, colors}: ColorItemProps) => {
  const renderColorSwatches = () => (
    <>
      <ColorSwatchColors>
        {colors.map((color: string) => (
          <ColorSwatch color={color} />
        ))}
      </ColorSwatchColors>
      <ColorSwatchLabels>
        {colors.map((color: string) => (
          <ColorSwatchLabel>{color}</ColorSwatchLabel>
        ))}
      </ColorSwatchLabels>
    </>
  );

  return (
    <ColorItemContainer>
      <ColorItemNames>
        <ColorItemTitle>{title}</ColorItemTitle>
        <ColorItemSubtitle>{subtitle}</ColorItemSubtitle>
      </ColorItemNames>
      <ColorItemColors>{renderColorSwatches()}</ColorItemColors>
    </ColorItemContainer>
  );
};

export default ColorItem;
