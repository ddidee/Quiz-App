import React, { Component } from 'react'
import Answer from "../Answer/Answer"
import Classes from "../Questions/Questions.module.css"

class Questions extends Component {
  render() {
    return (
      <div className={Classes.QuestionBody}>
        <div className={Classes.Question}>What is the capital of Nigeria?</div>
        <Answer/>
        
      </div>
    )
  }
}

export default Questions
