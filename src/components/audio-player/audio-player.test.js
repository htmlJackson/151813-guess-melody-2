import React from "react";
import renderer from "react-test-renderer";

import AudioPlayer from "../audio-player/audio-player.jsx";

jest.mock(`./audio-player`);

describe(`Проверка <AudioPlayer>`, () => {
  jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
  jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});
  it(`компонент <AudioPlayer> корректно отрисован`, () => {
    const mocSrc = `https://patrickdearteaga.com/audio/Child's%20Nightmare.ogg`;

    const tree = renderer.create(<AudioPlayer isPlaying={false} onPlayButtonClick={jest.fn()} src={mocSrc}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
