import React from "react";
import Format from "./component/Format/Format"
import QuizApp from "./component/QuizApp/QuizApp"
import Classes from "../src/App.module.css"


function App() {
  return (
    <div className={Classes.App}>
        <Format>
          <QuizApp></QuizApp>
        </Format>
    </div>
  );
}

export default App;
