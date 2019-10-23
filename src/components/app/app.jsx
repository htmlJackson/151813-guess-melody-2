import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {gameTime, errorCount, onButtonClick} = props;
  return <WelcomeScreen gameTime={gameTime} errorCount={errorCount} onButtonClick={onButtonClick} />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default App;
