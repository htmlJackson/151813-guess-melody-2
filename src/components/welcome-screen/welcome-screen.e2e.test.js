import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`E2E test on button click`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen gameTime={5} errorCount={3} onButtonClick={clickHandler} />);
  const playButton = welcomeScreen.find(`button`);
  playButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
