import React, { Component } from 'react'
import Question from "../Questions/Questions"
import Classes from "../QuizApp/QuizApp.module.css"

class QuizApp extends Component {
  render() {
    return (
      <div className={Classes.QuizApp}>
        <Question></Question>
      </div>
    )
  }
}

export default QuizApp
