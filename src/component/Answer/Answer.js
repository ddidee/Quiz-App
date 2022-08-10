import React from 'react'
import Classes from "../Answer/Answer.module.css"

const Answer = (props) => {

  let answer = Object.keys(props.answer).map(option => {
    return <div key= {option} 
    className = {Classes.Option}
    onClick= {props.onClick}>{props.answer[option]}</div>
  })
  return (
    <div className={Classes.Answer}>
      {answer}      
    </div>
  
  )
    
}

export default Answer


/* <div className={Classes.Option}>Abia</div> */
      // <div className={Classes.Option}>Abuja</div>
      // <div className={Classes.Option}>Kano</div>