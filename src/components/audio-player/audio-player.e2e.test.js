import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "../audio-player/audio-player.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`AudioPlayer components e2e test`, () => {
  jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
  jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});
  
  const createWrapper = (isPlaying) => {
    const audioSrc = `https://patrickdearteaga.com/audio/Child's%20Nightmare.ogg`;
    const handlePlayButtonClick = jest.fn();
    return mount(<AudioPlayer
      isPlaying={isPlaying}
      src={audioSrc}
      onPlayButtonClick={handlePlayButtonClick}
    />
    );
  };

  const click = (wrapper) => {
    wrapper.setState({isLoading: false});

    const button = wrapper.find(`button`);
    button.simulate(`click`);
  };

  it(`On click play button component state isPlaying change to TRUE`, () => {
    const wrapper = createWrapper(false);
    click(wrapper);

    expect(wrapper.state().isPlaying).toBeTruthy();
  });

  it(`On click play button component state isPlaying change to FALSE`, () => {
    const wrapper = createWrapper(true);
    click(wrapper);

    expect(wrapper.state().isPlaying).toBeFalsy();
  });
});
