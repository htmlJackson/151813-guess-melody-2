import React from "react";
import App from "../app/app.jsx";
import renderer from "react-test-renderer";
import {questions} from "../../mocks/questions.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App gameTime={5} errorCount={3} onButtonClick={jest.fn()} questions={questions} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
