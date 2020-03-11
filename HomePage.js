import React, { Component } from "react";

import Quizlogic from "./Quizlogic";
import Quizbank from "./Quizbank";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Home.css";

class HomePage extends Component {
  state = {
    questionData: [],
    correctAns : []
  };

  getQuestionData = () => {
    Quizbank().then((question,correct) => {
      this.setState({ questionData: question, correctAns :correct });
    });
  };
  componentDidMount() {
    this.getQuestionData();
  }

  render() {
    return (
      <div className="container">
        <div className="header_section">
          <div className="heading_container">
            <div className="title">QUIZ APP</div>
          </div>
        </div>

        <div className="body_section">
          <div className="body_container">
            <Quizlogic questiondata={this.state.questionData}  correctdata = {this.state.correctAns}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
