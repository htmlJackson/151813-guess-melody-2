import React from "react";
import PropTypes from "prop-types";

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: this.props.isPlaying
    };

    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
  }

  render() {
    const {isLoading, isPlaying} = this.state;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this.handlePlayButtonClick}
        />
        <div className="track__status">
          <audio ref={this.audioRef}></audio>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this.audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => this.setState({isLoading: false});

    audio.onPlay = () => this.setState({isPlaying: true});

    audio.onPause = () => this.setState({isPlaying: false});

    audio.ontimeupdate = () => this.setState({progress: audio.currentTime});
  }

  componentDidUpdate() {
    const audio = this.audioRef.current;
    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
      this.setState({isPlaying: false});
    }
  }

  componentWillUnmount() {
    const audio = this.audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  handlePlayButtonClick() {
    this.props.onPlayButtonClick();
    this.setState({isPlaying: !this.state.isPlaying});
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
