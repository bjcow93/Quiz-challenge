import React, { useState, useEffect } from 'react';
import '../styles.css';


function Question(props) {
    const [text, setText] = useState('');
    const [choices, setChoices] = useState([]);
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    const question = props.question;
    const key = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };


    useEffect(() => {
            setText(props.question.text);
            setAnswer('');
            setResult('');
            setChoices(props.question.incorrectAnswers
                .concat([props.question.correctAnswer])
                .sort(() => Math.random() - 0.5));
    }, [props.question.text]);

    const checkAnswer = function(choice) {
        setAnswer(choice);
        setResult(
            choice === props.question.correctAnswer
                ? 'correct'
                : 'incorrect'
            );
    };


    const label = function(choice) {
        if (choice === question.correctAnswer) {
            return 'correct';
        } else if (choice === answer) {
            return 'incorrect';
        }
    };


    return (
        <div>
            <p className='question-text'>{text}</p>
            {choices.map((choice, i) => (
                <p
                    className={`choices ${answer ? 'inactive' : ''}`}
                    key={i}
                    id={label(choice)}
                    onClick={() => {checkAnswer(choice)}}
                >
                    {key[i]}) ................. {choice}
                </p>
            ))}
            <p className={`result ${answer ? 'active' : ''}`}>{result === 'correct' ? 'Correct!' : 'Incorrect.'}</p>
            <button
                className={`next-button ${answer ? 'active' : ''}`}
                onClick={() => {props.submitAnswer(result)}}
            >
                NEXT
            </button>
        </div>
    );
}

export default Question;



// class Question extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             text: '',
//             choices: [],
//             answer: '',
//             result: '',
//         };
//     }


//     static getDerivedStateFromProps(nextProps, prevState) {
//         if (nextProps.question.text !== prevState.text) {

//             const newChoices = nextProps.question.incorrectAnswers
//                 .concat([nextProps.question.correctAnswer])
//                 .sort(() => Math.random() - 0.5);

//             return {
//                 text: nextProps.question.text,
//                 choices: newChoices,
//                 answer: '',
//                 result: ''
//             };
//         } else return null;
//     }

//     checkAnswer(choice) {
//         const result =
//             choice === this.props.question.correctAnswer
//                 ? 'correct'
//                 : 'incorrect';

//         this.setState({
//             answer: choice,
//             result: result
//         });
//     }

//     render() {
//         const { question } = this.props;
//         const { text, choices, answer, result } = this.state;
//         const key = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };

//         const label = (choice) => {
//             if (choice === question.correctAnswer) {
//                 return 'correct';
//             } else if (choice === answer) {
//                 return 'incorrect';
//             }
//         };

//         return (
//             <div>
//                 <p className='question-text'>{text}</p>
//                 {choices.map((choice, i) => (
//                     <p
//                         className={`choices ${answer ? 'inactive' : ''}`}
//                         key={i}
//                         id={label(choice)}
//                         onClick={e => {
//                             this.checkAnswer(choice);
//                         }}
//                     >
//                         {key[i]}) ................. {choice}
//                     </p>
//                 ))}
//                 <p className={`result ${answer ? 'active' : ''}`}>{result === 'correct' ? 'Correct!' : 'Incorrect.'}</p>
//                 <button
//                     className={`next-button ${answer ? 'active' : ''}`}
//                     onClick={e => {
//                         this.props.submitAnswer(result);
//                     }}
//                 >
//                     NEXT
//         </button>
//             </div>
//         );
//     }
// }