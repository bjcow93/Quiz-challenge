import React, { useState } from 'react';
import MultipleChoiceQuiz from './Quizzes';
import { quizzes } from '../quizzes';
import '../styles.css';

console.log('Here are the quizzes:', quizzes);


function App() {
  const quiz = quizzes[0];
  const [completed, setCompleted] = useState([]);

  if (quizzes.length === 0) {
    return (
      <button onClick={() => window.location.reload()}>
        Try Again!
      </button>
    );
  }

  return (
    <div className="app">
      <MultipleChoiceQuiz 
        quiz={quiz} 
        onFinish={() => { setCompleted(completed.concat([quizzes.shift()]))}} 
      />
    </div>
  );
}

export default App;