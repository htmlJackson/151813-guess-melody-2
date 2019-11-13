import React from "react";
import renderer from "react-test-renderer";

import Timer from "../timer/timer.jsx";

describe(`Проверка <Timer>`, () => {
  it(`компонент <Timer> корректно отрисован`, () => {

    const tree = renderer.create(<Timer gameTime={5} onTimerTick={jest.fn()} onTimerExpire={jest.fn()} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
