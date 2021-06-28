// import './App.css';
import QuizApp from './quiz';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
import { Provider } from 'react-redux'
import Store from './store';

function App() {

  return (
 <Provider store={Store}>
    <QuizApp />
  </Provider>
  );
}

export default App;
