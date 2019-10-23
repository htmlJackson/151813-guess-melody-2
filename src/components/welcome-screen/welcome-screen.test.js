import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import renderer from "react-test-renderer";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<WelcomeScreen gameTime={5} errorCount={3} onButtonClick={jest.fn()} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
