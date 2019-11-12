import {createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {settings, questions} from "./mocks/questions.js";
import {reducer} from "./reducer.js";

const init = () => {
  const store = createStore(reducer);

  window.store = store;
  ReactDOM.render(<Provider store={store}>
      <App
        errorCount={settings.errorCount}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`#root`));
};

init();
