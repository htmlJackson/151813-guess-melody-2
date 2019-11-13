import React from "react";
import {App} from "../app/app.jsx";
import renderer from "react-test-renderer";
import {questions} from "../../mocks/questions.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(
      <App
        gameTime={5}
        errorCount={3}
        onWelcomeScreenClick={jest.fn()}
        onUserAnswer={jest.fn()}
        mistakes={0}
        questions={questions}
        onTimerTick={jest.fn()}
        onTimerExpire={jest.fn()}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
