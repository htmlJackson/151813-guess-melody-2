import React from "react";
import PropTypes from "prop-types";

const GameMistakes = (props) => {
  const {mistakes} = props;
  return (
    <div className="game__mistakes">
      {[...Array(mistakes)].map((e, i) => <div className="wrong" key={`mistake-${i}`}></div>)}
    </div>
  );
};

GameMistakes.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default GameMistakes;
