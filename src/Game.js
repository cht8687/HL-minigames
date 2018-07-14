import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Stage } from "react-pixi-fiber";
import RotatingBunny from "./components/Rectangle";

const height = 450;
const width = 600;
const OPTIONS = {
  backgroundColor: 0x1099bb
};

class Game extends Component {
  render() {
    return (
      <Stage options={OPTIONS} width={width} height={height}>
        <RotatingBunny x={width / 2} y={height / 2} />
      </Stage>
    );
  }
}

export default Game;
