import React, { Component } from 'react'
import Question from "../Questions/Questions"
import Answer from "../Answer/Answer"
import Classes from "../QuizApp/QuizApp.module.css"
import Button from '../Button/Button'

class QuizApp extends Component {
  state = {
    questions: [
      'What is the capital of Nigeria?',
      'What year did Nigeria gain her independence?',
      'What is the capital of Nassarawa?',
      'What color is of the Nigerian flag?',
    ],
    options: [
      ['Lagos', 'Kano', 'Abuja', 'Abia'],
      [1920, 1960, 1953, 1963],
      ['Lafia', 'Gusau', 'Nassarawa', 'yola'],
      ['Purple', 'Grey', 'Blue', 'White'],

    ],
    score: 0,

  }

  checkAnswer = (answer) => {
    if
  }
    
  render() {
    return (
      <div className={Classes.QuizApp}>
        <Question
        question = {this.state.questions[1]} />
        <Answer
        answer = {this.state.options[1]}
        onClick = {this.checkAnswer}/>
        <Button/>
      </div>
    )
  }
}

export default QuizApp


// quizBank: [
//   {
//     id: 0,
//     question: 'What is the capital of Nigeria?',
//     options: ['Lagos', 'Kano', 'Abuja', 'Abia'],
//     answer: 'Abuja'

//   },
//   {
//     id: 2,
//     question: 'What year did Nigeris gain her independence?',
//     options: [1920, 1960, 1953, 1963],
//     answer: 1960

//   },
//   {
//     id: 3,
//     question: 'What is the capital of Nassarawa?',
//     options: ['Lafia', 'Gusau', 'Nassarawa', 'yola'],
//     answer: 'Lafia'

//   },
//   {
//     id: 4,
//     question: 'What color is of the Nigerian flag?',
//     options: ['Purple', 'Grey', 'Blue', 'White'],
//     answer: 'White'

//   }
// ],