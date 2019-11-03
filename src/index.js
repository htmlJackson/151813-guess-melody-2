import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {settings, questions} from "./mocks/questions.js";

const init = () => {
  const onButtonClick = () => {};
  ReactDOM.render(<App errorCount={settings.errorCount} gameTime={settings.gameTime} onButtonClick={onButtonClick} questions={questions} />, document.querySelector(`#root`));
};

init();
