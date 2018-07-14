import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Stage } from 'react-pixi-fiber';
import styled from 'styled-components';
import Rectangle from './components/Rectangle';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants/gameConstants';

const StageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const OPTIONS = {
  backgroundColor: 0x1099bb,
};

class Game extends Component {
  render() {
    return (
      <StageWrapper>
        <Stage options={OPTIONS} width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
          <Rectangle x={100} y={50} />
        </Stage>
      </StageWrapper>
    );
  }
}

export default Game;
