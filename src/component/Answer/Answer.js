import React from 'react'
import Classes from "../Answer/Answer.module.css"

const Answer = (props) => {

  let answer = Object.keys(props.answer)
    .map(option => {
      return <li 
              className = 
              {
                props.correctAnswer === option ?
                Classes.Right : 
                props.clickedAnswer === option ?
                Classes.Wrong : ''
              }
              key= {option} 

              onClick= {() => props.checkAnswer(option)}>

                {props.answer[option]}

            </li>
  })
  return (
    <ul className={Classes.Answer} 
    disabled = {props.clickedAnswer ? true: false}>
      {answer}      
    </ul>
  
  )
    
}

export default Answer


/* <div className={Classes.Option}>Abia</div> */
      // <div className={Classes.Option}>Abuja</div>
      // <div className={Classes.Option}>Kano</div>