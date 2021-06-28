import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {useSelector}from 'react-redux'

function QuizApp(){

    const state =useSelector(State=>State)

    // console.log(state.quizs[0].question)
    // const [quiz, setquiz] = useState([
    //     {
    //       question: "How do you write Hello World in an alert box?",
    //       answers: ["(hello world)", "pop('hello world')", "alert:'hello world';", "alert('hello world')"],
    //       coorectAns: "alert('hello world')",
    //     },
    //     {
    //       question: "How can you add a comment in a JavaScript?",
    //       answers: ["**comment**", "*/comment*/", "//comment", "//comment//"],
    //       coorectAns: "//comment",
    //     },
    //     {
    //       question: "How do you create a function in JavaScript?",
    //       answers: ["function myFunction()", "function=myfuntion()", "Function:myfunction()","{Function=myfunction}"],
    //       coorectAns: "function myFunction()",
    //     },
    //     {
    //       question: "The external JavaScript file must contain the <script> tag.",
    //       answers: ["True","Fales","!True","none above"],
    //       coorectAns: "True",
    //     },
    //   ])
      const [count, setcount] = useState(0)
      const [score, setscore] = useState(0)
      const [cond, setcond]=useState(true)
    
    
      function Score(e) {
    
        console.log(state.quizs[count].coorectAns)
    
        if (state.quizs[count].coorectAns == e) {
          setscore(score + 1)
        }
      }
    
    
    return(
   

        <div className="body">

        <div className="header">
          <h1>Question {count + 1}/{state.quizs.length}</h1>
        </div>
  
    
        {cond?  <div className="quiz">
        <h2>{state.quizs[count].question}</h2>

  
        <div className="row p-4 rounded shadow-5 text-dark" >
  
            {/* <button onClick={(e) => {
              Score(e.target.innerHTML)
              if (count + 1 < quiz.length)
                setcount(count + 1)
  
            }}
              className="col-md-6 col-12 option ">{quiz[count].answers[0]}</button>
            <button onClick={(e) => {
              Score(e.target.innerHTML)
              if (count + 1 < quiz.length)
                setcount(count + 1)
            }}
  
              className="col-md-6 col-12 option ">{quiz[count].answers[1]}</button>
            <button onClick={(e) => {
              Score(e.target.innerHTML)
              if (count + 1 < quiz.length)
                setcount(count + 1)
            }}
  
              className="col-md-6 col-12 option ">{quiz[count].answers[2]}</button>
            <button onClick={(e) => {
              Score(e.target.innerHTML)
              if (count + 1 < quiz.length)
                setcount(count + 1)
            }}
              className="col-md-6 col-12 option ">{quiz[count].answers[3]}</button> */}
              {state.quizs[count].answers.map((e)=>{
                 return(
                  <button  onClick={(e) => {
                    Score(e.target.innerHTML)
                    if (count + 1 < state.quizs.length)
                      setcount(count + 1)
                      else{
                        setcond(false)
                      }
                  }} className="col-md-6 col-12 option ">{e}</button>
                 );
              })}
  
      
  
          {/* <div className="btndiv">
            <button onClick={() => setcount(+1)} className="btnn">N e x t</button>
          </div> */}
  
        </div>    </div>:null}
  
        <div className="progrss">
          <progress className="progressbar" id="file" value={Math.floor(score / state.quizs.length * 100)} max="100"> 32% </progress>
          <div className="persentage-div">your result is {Math.floor(score / state.quizs.length * 100)}%
          </div>
        </div>
  
      </div>
  
    );
}

export default QuizApp