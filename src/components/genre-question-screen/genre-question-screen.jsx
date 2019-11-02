import React from "react";
import PropTypes from "prop-types";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: Array(4).fill(null)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }


  handleSubmit(evt) {
    const {onAnswer} = this.props;
    evt.preventDefault();
    onAnswer(this.state.answers);
  }

  handleCheckboxChange(i) {
    const newAnswers = this.state.answers.slice();
    this.setState(() => {
      newAnswers[i] = i;
      return {
        answers: newAnswers
      };
    });
  }

  render() {
    const {screenIndex, question} = this.props;
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

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} трэки</h2>
          <form className="game__tracks" onSubmit={this.handleSubmit}>
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="track">
                  <button className="track__button track__button--play" type="button" />
                  <div className="track__status">
                    <audio src={it.src}/>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} onChange={() => {
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
  onAnswer: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
