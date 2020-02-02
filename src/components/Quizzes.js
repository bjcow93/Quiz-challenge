import React, { useState, useEffect } from 'react';
import Question from './Questions';
import { getMessage } from '../messages.js';
import '../styles.css';


function MultipleChoiceQuiz(props) {
    const [title, setTitle] = useState(props.quiz.title);
    const [questions, setQuestions] = useState(props.quiz.questions);
    const [correct, setCorrect] = useState([]);
    const [incorrect, setIncorrect] = useState([]);
    const question = questions[0];

    useEffect(() => {
            setTitle(props.quiz.title);
            setQuestions(props.quiz.questions);
            setCorrect([]);
            setIncorrect([]);
    }, [props.quiz.title]);


    const submitAnswer = function(result) {
        result === 'correct'
            ? setCorrect(correct.concat([questions.shift()]))
            : setIncorrect(incorrect.concat([questions.shift()]));
    };

    if (questions.length === 0) {
        return (
            <div>
                <p>{getMessage()}</p>
                <p>
                    You got {correct.length} correct and{' '}
                    {incorrect.length} incorrect!
                </p>
                <button onClick={props.onFinish}>Next Quiz</button>
            </div>
        );
    }

    return (
        <div>
            <p className='quiz-title'>{title}</p>
            <div>
                <Question question={question} submitAnswer={submitAnswer} />
            </div>
        </div>
    );
}

export default MultipleChoiceQuiz;


// class MultipleChoiceQuiz extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             title: '',
//             questions: [],
//             correct: [],
//             incorrect: [],
//         };

//         this.submitAnswer = this.submitAnswer.bind(this);
//     }



//     static getDerivedStateFromProps(nextProps, prevState) {
//         return nextProps.quiz.title === prevState.title
//             ? {}
//             : {
//                 title: nextProps.quiz.title,
//                 questions: nextProps.quiz.questions,
//                 correct: [],
//                 incorrect: [],
//             };
//     }

//     submitAnswer(result) {
//         result === 'correct'
//             ? this.setState({
//                 correct: this.state.correct.concat([this.state.questions.shift()]),
//             })
//             : this.setState({
//                 incorrect: this.state.incorrect.concat([this.state.questions.shift()]),
//             });
//     }

//     render() {
//         const { title, questions, correct, incorrect } = this.state;
//         const question = questions[0];

//         if (questions.length === 0) {
//             return (
//                 <div>
//                     <p>{getMessage()}</p>
//                     <p>
//                         You got {correct.length} correct and{' '}
//                         {incorrect.length} incorrect!
//           </p>
//                     <button onClick={this.props.onFinish}>Next Quiz</button>
//                 </div>
//             );
//         }

//         return (
//             <div>
//                 <p className='quiz-title'>{title}</p>
//                 <div>
//                     <Question question={question} submitAnswer={this.submitAnswer} />
//                 </div>
//             </div>
//         );
//     }
// }