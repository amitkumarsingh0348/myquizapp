import React, { Component } from "react";

import Questionbox from "./Questionbox";
import "./css/Quizlogic.css";

class Quizlogic extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      response: 0
    };
  }
  computescore = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5
    });
  };

  render() {
    console.log(this.props.correctdata);

    return (
      <div className="question_list">
        {this.props.questiondata.length > 0 &&
          this.state.response < 5 &&
          this.props.questiondata.map(
            ({ question, answers, correct, questionId }) => (
              <Questionbox
                questiondata={question}
                option={answers}
                key={questionId}
                selected={answer => this.computescore(answer, correct)}
              />
            )
          )}
        <div className="ansbox">
          {this.state.response === 5 ? (
            <h1>Total Score : {this.state.score}</h1>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Quizlogic;
