import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "../audio-player/audio-player.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`E2E test on AudioPlayer play`, () => {
  jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

  const mocSrc = `https://patrickdearteaga.com/audio/Child's%20Nightmare.ogg`;
  const handlerPlayerButtonClick = jest.fn();
  const audioPlayer = mount(<AudioPlayer isPlaying={false} src={mocSrc} onPlayButtonClick={handlerPlayerButtonClick} />);
  const audioPlayerButton = audioPlayer.find(`.track__button`);

  audioPlayer.setState({isLoading: false});

  audioPlayerButton.simulate(`click`);
  expect(handlerPlayerButtonClick).toHaveBeenCalledTimes(1);
  expect(audioPlayer.state().isPlaying).toBe(true);

  audioPlayerButton.simulate(`click`);
  expect(handlerPlayerButtonClick).toHaveBeenCalledTimes(2);
  expect(audioPlayer.state().isPlaying).toEqual(false);
});
