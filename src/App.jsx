import React, { useState } from 'react'
import './App.css'
import Quiz from './Quizdata.json'
import Quizresult from './Quizresult'

const App = () => {
  //console.log(Quiz);
   
  const [currentquestion,SetCurrentQuestion] = useState(0);
  const [clickedoption,SetClickedOption] = useState(0);
  const [score,SetScore] = useState(0);
  const [showresult,SetShowResult] = useState(false);
  


   const nextquestion = () => {
    updatescore();
    if(currentquestion<Quiz.length-1){
      SetCurrentQuestion(currentquestion+1)
      SetClickedOption(0); 
    }else{
      SetShowResult(true);
    }
     }

     const updatescore = () => {
      if(clickedoption === Quiz[currentquestion].answer){;
      SetScore(score+1);
      }
     }

     const resetAll = () => {
      SetShowResult(false);
      SetClickedOption(0);
      SetCurrentQuestion(0);
      SetScore(0);
     };

  return (
    <>
     <p className='heading-txt'>Welcome to Quiz</p>
     <div className="container">
      
      {showresult ? (
        <Quizresult score={score} totalscore={Quiz.length} tryagain={resetAll} />
      ):(
      <>
     <div className="question">
       {Quiz[currentquestion].question}
     </div>

    <div className="option-container">
      {Quiz[currentquestion].option.map((op,i) => {
        return(
          <button onClick={()=> SetClickedOption(i+1)} key={i} className={`option-btn ${clickedoption == i+1?"checked":null}`}>{op}</button>
        )
      })}

    </div>
     <button id='next-button' onClick={nextquestion}>Next</button>
    </>)}
    </div>
     </>
  )
}

export default App