import React from "react";
import renderer from "react-test-renderer";

import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import questions from "../../mocks/questions.js";

describe(`Проверка <GenreQuestionScreen>`, () => {
  it(`компонент <GenreQuestionScreen> корректно отрисован`, () => {
    const question = 0;
    const currentQuestion = questions[question];
    const handlerClick = jest.fn();

    const tree = renderer.create(<GenreQuestionScreen screenIndex={question} question={currentQuestion} onAnswer={handlerClick} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
