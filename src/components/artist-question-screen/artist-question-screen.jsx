import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";
import GameMistakes from "../game-mistakes/game-mistakes.jsx";
import Timer from "../timer/timer.jsx";

class ArtistQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {screenIndex, question, onAnswer, mistakes, gameTime, onTimerTick, onTimerExpire} = this.props;
    const {answers, song} = question;
    const {isPlaying} = this.state;

    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <Timer gameTime={gameTime} onTimerTick={onTimerTick} onTimerExpire={onTimerExpire} />

          <GameMistakes mistakes={mistakes} />
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                isPlaying={isPlaying}
                onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
                src={song.src}
              />
            </div>
          </div>
          <form className="game__artist">
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="artist">
                  <input onClick={() => onAnswer(it)} className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
                  <label className="artist__name" htmlFor={`answer-${i}`}>
                    <img className="artist__picture" src={it.picture} alt={it.artist} />
                    {it.artist}
                  </label>
                </div>
              );
            })}
          </form>
        </section>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  screenIndex: PropTypes.number.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`artist`]).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          picture: PropTypes.string.isRequired,
          artist: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onTimerTick: PropTypes.func.isRequired,
  onTimerExpire: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
