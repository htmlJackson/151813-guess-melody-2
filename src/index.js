import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {settings, questions} from "./mocks/questions.js";

const init = () => {
  ReactDOM.render(<App errorCount={settings.errorCount} gameTime={settings.gameTime} questions={questions} />, document.querySelector(`#root`));
};

init();
