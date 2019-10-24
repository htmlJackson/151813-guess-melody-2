import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3
  };

  const handleButtonClick = () => {};

  ReactDOM.render(<App errorCount={settings.errorCount} gameTime={settings.gameTime} onButtonClick={handleButtonClick} />, document.querySelector(`#root`));
};

init();
