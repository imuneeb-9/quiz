import React from 'react'


const Quizresult = (props) => {
  return (
   <>
   <div className='show-score'>
      Your Score:{props.score}
      <br/>
      Total Score:{props.totalscore}
    </div>
     <button id='next-button' onClick={props.tryagain} >Try Again</button>
    </>
  )
}

export default Quizresult
