import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";
import GameMistakes from "../game-mistakes/game-mistakes.jsx";
import Timer from "../timer/timer.jsx";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: new Array(4).fill(false),
      activePlayer: -1,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }


  handleSubmit(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;
    onAnswer(this.state.answers);
    this.setState({
      activePlayer: -1,
      answers: new Array(4).fill(false)
    });
  }

  handleCheckboxChange(i) {
    const newAnswers = this.state.answers.slice();
    newAnswers[i] = !newAnswers[i];

    this.setState({
      answers: newAnswers
    });
  }

  render() {
    const {screenIndex, question, mistakes, gameTime, onTimerTick, onTimerExpire} = this.props;
    const {genre, answers} = question;

    const circleStyle = {
      filter: `url(#blur)`,
      transform: `rotate(-90deg) scaleY(-1)`,
      transformOrigin: `center`,
    };

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style={circleStyle} />
          </svg>
          <Timer gameTime={gameTime} onTimerTick={onTimerTick} onTimerExpire={onTimerExpire} />
          <GameMistakes mistakes={mistakes} />
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} трэки</h2>
          <form className="game__tracks" onSubmit={this.handleSubmit}>
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="track">
                  <AudioPlayer
                    src={it.src}
                    isPlaying={i === this.state.activePlayer}
                    onPlayButtonClick={() => this.setState({
                      activePlayer: this.state.activePlayer === i ? -1 : i
                    })}
                  />
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} key={`answer-${i}`} onChange={() => {
                      this.handleCheckboxChange(i);
                    }} />
                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                  </div>
                </div>
              );
            })}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  screenIndex: PropTypes.number.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`]).isRequired,
    genre: PropTypes.oneOf([`jazz`, `blues`, `pop`, `rock`, `folk`]),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          genre: PropTypes.oneOf([`jazz`, `blues`, `pop`, `rock`, `folk`])
        }).isRequired
    ).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onTimerTick: PropTypes.func.isRequired,
  onTimerExpire: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
