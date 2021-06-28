const INITIAL_STATE={
    email:"avx",
    quizs:[
        {
            question: "How do you write Hello World in an alert box?",
            answers: ["(hello world)", "pop('hello world')", "alert:'hello world';", "alert('hello world')"],
            coorectAns: "alert('hello world')",
          },
          {
            question: "How can you add a comment in a JavaScript?",
            answers: ["**comment**", "*/comment*/", "//comment", "//comment//"],
            coorectAns: "//comment",
          },
          {
            question: "How do you create a function in JavaScript?",
            answers: ["function myFunction()", "function=myfuntion()", "Function:myfunction()","{Function=myfunction}"],
            coorectAns: "function myFunction()",
          },
          {
            question: "The external JavaScript file must contain the <script> tag.",
            answers: ["True","Fales","!True","none above"],
            coorectAns: "True",
          },
         
    ]
}

 const Reducer=(State= INITIAL_STATE)=>{
    return State
}


export default Reducer