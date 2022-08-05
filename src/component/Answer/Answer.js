import React, { Component } from 'react'
import Classes from "../Answer/Answer.module.css"

class Answer extends Component {
  render() {
    return (
      <div className={Classes.Answer}>
        <div className={Classes.Option}>Lagos</div>
        <div className={Classes.Option}>Abia</div>
        <div className={Classes.Option}>Abuja</div>
        <div className={Classes.Option}>Kano</div>
      </div>
    )
  }
}

export default Answer
