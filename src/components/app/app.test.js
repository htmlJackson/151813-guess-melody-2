import React from "react";
import App from "../app/app.jsx";
import renderer from "react-test-renderer";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App gameTime={5} errorCount={3} onButtonClick={jest.fn()} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
