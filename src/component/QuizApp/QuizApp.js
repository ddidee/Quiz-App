import React, {Component} from 'react'
import Question from "../Questions/Questions"
import Answer from "../Answer/Answer"
import Classes from "../QuizApp/QuizApp.module.css"
import Button from '../Button/Button'
import EndQuiz from '../EndQuiz/EndQuiz'

class QuizApp extends Component {
  state = {
    questions: {

      1: 'What is the capital of Nigeria?',
      2: 'What year did Nigeria gain her independence?',
      3: 'What is the capital of Nassarawa?',
      4: 'What color is of the Nigerian flag?'
    },

    options: {
      1: {
        1: 'Ogun',
        2: 'Lagos',
        3: 'Abuja',
        4: 'Kwara'
      },
      2: {
        1: '1920',
        2: '1960',
        3: '1953',
        4: '1963'
      },
      3: {
        1: 'lafia',
        2: 'Gusau',
        3: 'Nasarawa',
        4: 'Yola'
      },
      4: {
        1: 'Purple',
        2: 'Grey',
        3: 'Blue',
        4: 'White'
      }
    },

    correctAnswers: {
      1: '3',
      2: '2',
      3: '1',
      4: '4'
    },

    score: 0,
    step: 1,
    correctAnswer: 0,
    clickedAnswer: 0
  }

  // checking for correct answers
  checkAnswer = answer => {
    const { correctAnswers, step, score} = this.state
    if(answer === correctAnswers[step]){

      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer
      
      })
    }
    else{
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer

      })
    }
  }

  nextQuestionHandler = (step) => {

    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0
    })
  }

  render() {
    let {questions, options, step, clickedAnswer, correctAnswer, score} = this.state
    return (
      <div className = {Classes.QuizApp}>
        {step <= Object.keys(questions).length ?
        (<>
            <Question 
              question = {questions[step]}
            />

            <Answer 
              answer = {options[step]}
              step = {step}
              correctAnswer = {correctAnswer}
              clickedAnswer = {clickedAnswer}
              checkAnswer = {this.checkAnswer}
            /> 

            <Button
            // disabling the next button until an answer is clicked
              disabled = {
                clickedAnswer && Object.keys(questions).length >= step
                ? false : true
              }
              next = {() => this.nextQuestionHandler(step)}
              />

          </>) : (

            // ending the quiz if there are no more questions
           <EndQuiz
              score = {score}
              scoreLength= {Object.keys(questions).length}
            />

        )
      }
        
      </div>
    )
  }
}

export default QuizApp


