/** @format */

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function renderSquare(i, boardN) {
  const x = i % boardN;
  const y = Math.floor(i / boardN);
  const black = (x + y) % 2 === 1;
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  const squareSize = `${100 / boardN}%`;

  return (
    <div key={i} style={{ width: squareSize, height: squareSize }}>
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: "100%",
          height: "100%",
        }}
      ></div>
    </div>
  );
}

const InputBox = ({ boardN }) => {
  const squares = [];
  const squaresNumber = boardN * boardN;

  for (let i = 0; i < squaresNumber; i++) {
    squares.push(renderSquare(i, boardN));
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};

InputBox.propTypes = {
  boardN: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    boardN: state.boardPage.boardN,
  };
};

export default connect(mapStateToProps, null)(InputBox);
