import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

import {questions} from "../../mocks/questions.js";

Enzyme.configure({adapter: new Adapter()});

it(`E2E test on GenreQuestionScreen answer`, () => {
  const question = 0;
  const currentQuestion = questions[question];
  const onAnswer = jest.fn();
  const genreQuestionScreen = mount(<GenreQuestionScreen screenIndex={question} question={currentQuestion} onAnswer={onAnswer} />);
  const genreQuestionForm = genreQuestionScreen.find(`.game__tracks`);
  genreQuestionForm.simulate(`submit`, {
    preventDefault: () => {

    }
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
});
