import React from 'react'
import Classes from "../Questions/Questions.module.css"


const Questions = (props) => {
    return (
        <h2 className={Classes.Question}>{props.question}</h2>
        
    )
  
}

export default Questions
