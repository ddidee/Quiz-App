import React from 'react'
import Classes from '../Button/Button.module.css'

const Button = (props) => {
  return (
    <div className={Classes.Button}>
        <div className={Classes.NextButton}
        disabled = {props.disabled}
        onClick = {props.next}>NEXT</div>
    </div>
  )
}

export default Button
