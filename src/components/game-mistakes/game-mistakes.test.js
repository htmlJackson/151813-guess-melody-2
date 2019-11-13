import React from "react";
import renderer from "react-test-renderer";

import GameMistakes from "../game-mistakes/game-mistakes.jsx";

describe(`Проверка <GameMistakes>`, () => {

  it(`Компонент <GameMistakes> корректно отрисован`, () => {
    const tree = renderer.create(<GameMistakes mistakes={2} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
