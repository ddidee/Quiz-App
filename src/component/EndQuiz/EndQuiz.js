import React from 'react'
import Classes from './EndQuiz.module.css'

function EndQuiz(props) {
  return (
    <div className={Classes.EndQuiz}>
        <h1>You have completed your quiz</h1>
        <p>You Scored {props.score} of {props.scoreLength}</p>
        <p>Thank You..</p>
      
    </div>
  )
}

export default EndQuiz
