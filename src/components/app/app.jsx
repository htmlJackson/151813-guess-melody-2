import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {gameTime, errorCount} = props;
      return <WelcomeScreen gameTime={gameTime} errorCount={errorCount} onButtonClick={onUserAnswer} />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    const type = {
      GENRE: `genre`,
      ARTIST: `artist`
    };

    switch (currentQuestion.type) {
      case type.GENRE: return <GenreQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case type.ARTIST: return <ArtistQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
      answers: [],
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(answer) {
    const {questions} = this.props;
    const newAnswers = this.state.answers.slice();
    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= questions.length;

      if (this.state.question !== -1) {
        newAnswers.push(answer);
      }

      return {
        question: !isEnd ? nextIndex : -1,
        answers: newAnswers
      };

    });
  }

  render() {
    const {question} = this.state;

    return App.getScreen(question, this.props, this.handleAnswer);
  }

}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
