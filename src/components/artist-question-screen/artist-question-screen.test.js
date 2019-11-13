import React from "react";
import renderer from "react-test-renderer";

import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";

import {questions} from "../../mocks/questions.js";

jest.mock(`../audio-player/audio-player.jsx`);


describe(`Проверка <ArtistQuestionScreen>`, () => {
  it(`компонент <ArtistQuestionScreen> корректно отрисован`, () => {
    const question = 2;

    const currentQuestion = questions[question];
    const onAnswer = jest.fn();

    const tree = renderer.create(
        <ArtistQuestionScreen
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
