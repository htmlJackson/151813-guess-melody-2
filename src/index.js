import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {settings, questions} from "./mocks/questions.js";

const init = () => {
  const handleButtonClick = () => {};

  ReactDOM.render(<App errorCount={settings.errorCount} gameTime={settings.gameTime} onButtonClick={handleButtonClick} questions={questions} />, document.querySelector(`#root`));
};

init();
