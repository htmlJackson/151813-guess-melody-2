import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer.js";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";

class App extends React.PureComponent {

  getScreen(question) {

    if (!question) {
      const {gameTime, errorCount, onWelcomeScreenClick, onTimerTick} = this.props;
      return <WelcomeScreen gameTime={gameTime} errorCount={errorCount} onButtonClick={onWelcomeScreenClick} />;
    }

    const {gameTime, errorCount, step, mistakes, onUserAnswer, onTimerTick} = this.props;

    const type = {
      GENRE: `genre`,
      ARTIST: `artist`
    };

    switch (question.type) {
      case type.GENRE: return <GenreQuestionScreen
        screenIndex={step}
        question={question}
        mistakes={mistakes}
        gameTime={gameTime}
        onAnswer={(userAnswer) => onUserAnswer(
          userAnswer,
          question,
          mistakes,
          errorCount
        )}
        onTimerTick={onTimerTick}
      />;

      case type.ARTIST: return <ArtistQuestionScreen
        screenIndex={step}
        question={question}
        mistakes={mistakes}
        gameTime={gameTime}
        onAnswer={(userAnswer) => onUserAnswer(
          userAnswer,
          question,
          mistakes,
          errorCount
        )}
        onTimerTick={onTimerTick}
      />;
    }

    return null;
  }

  render() {
    const {questions, step} = this.props;
    return this.getScreen(questions[step]);
  }

}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
  gameTime: state.gameTime
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
      userAnswer,
      question,
      mistakes,
      maxMistakes
    ));
  },

  onTimerTick: () => dispatch(ActionCreator.decrementTime()),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
