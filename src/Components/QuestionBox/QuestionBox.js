// import React, { Component } from 'react'
// import './QuestionBox.css'

// export class QuestionBox extends Component {
//     state = {
//         question: {
//             1: 'What is your name?',
//             2: 'How old are you?',
//             3: 'what do you do?'
//          },
//         answer: {
//             1: {
//                 Option1: 'Dee',
//                 Option2: 'Ddidee',
//                 Option3: 'Deola',
//                 Option4: 'Doyin'
//             }
//             2: {
//                 Option1: 30,
//                 Option2: 24,
//                 Option3: 19,
//                 Option4: 55
//             }
//             3: {
//                 Option1: 'Engineer',
//                 Option2: 'Doctor',
//                 Option3: 'Trader',
//                 Option4: 'Others'
//             }

//         },
//         color: this.props.color
//     }

//     getNextQuestion = () => {
//     }
//   render() {
//     return (
//       <div className='QuestionBox'>
//         <div className='Question'>{this.state.question} </div>
//         <div className='Answer'>
//             <div className='Option'>{this.state.answer.Option1}</div>
//             <div className='Option'>{this.state.answer.Option2}</div>
//             <div className='Option'>{this.state.answer.Option3}</div>
//             <div className='Option'>{this.state.answer.Option4}</div>
//         </div>
//         <div className='Button'>
//             <div className='PrevButton'>PREV</div>
//             <div className='NextButton'>NEXT</div>

//         </div>
//       </div>
//     )
//   }
// }

// export default QuestionBox
