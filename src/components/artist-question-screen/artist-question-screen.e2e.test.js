import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";

import {questions} from "../../mocks/questions.js";

Enzyme.configure({adapter: new Adapter()});

it(`E2E test on ArtistQuestionScreen answer`, () => {
  const question = 2;
  const currentQuestion = questions[question];
  const onAnswer = jest.fn();
  const fakeEvent = {preventDefault: () => window.console.log(`preventDefault`)};
  const artistQuestionScreen = shallow(<ArtistQuestionScreen screenIndex={question} question={currentQuestion} onAnswer={onAnswer} />);
  const genreQuestionForm = artistQuestionScreen.find(`.game__artist`);
  genreQuestionForm.simulate(`change`, fakeEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
});
