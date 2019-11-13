import React from "react";
import renderer from "react-test-renderer";

import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

import {questions} from "../../mocks/questions.js";

jest.mock(`../audio-player/audio-player.jsx`);

describe(`Проверка <GenreQuestionScreen>`, () => {
  it(`компонент <GenreQuestionScreen> корректно отрисован`, () => {
    const question = 0;

    const currentQuestion = questions[question];
    const onAnswer = jest.fn();

    const tree = renderer.create(
        <GenreQuestionScreen
          screenIndex={question}
          question={currentQuestion}
          onAnswer={onAnswer}
          mistakes={0}
          gameTime={5}
          onTimerTick={jest.fn()}
          onTimerExpire={jest.fn()}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
