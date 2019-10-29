import React from 'react';
import Result from '././Result';
import Warning from '././Warning';

function InputGuess({ 
    fourDigitNumber
}){

    const [guess, setGuess] = React.useState();
    const [typedInput, setTypedInput] = React.useState('');
    const [result, setResult] = React.useState('');
    const [warnMessage, setWarnMessage] = React.useState('')

    return (
        <>
            <input
                onChange={event => setTypedInput(event.target.value)}
                placeholder="guess 4 digit number"
                />
            <button onClick={() => {
                setGuess(typedInput);
                //console.log(typedInput);
                setWarnMessage(CheckForValidGuess(typedInput));
                setResult(CompareGuess(fourDigitNumber, typedInput));
            }}>Submit</button>

            <Result  result={result}/>
            <Warning warnMessage={warnMessage}/>
        </>
    )
}

function CheckForValidGuess(userInput) {
    let digits = /[0-9]/g //regex allows match function to look for 0-9 characters globally
    let message
    console.log(userInput.match(digits))
    if(userInput.length != 4){
      message = 'Make sure that your guess is 4 digits long'
    } else if ((userInput.match(digits) == null) || (userInput.match(digits).length != userInput.length)){
  
      //if the number of characters thats are digits in userInput  is not equal to the original string length, there are characters that are not digits
      message = 'Make sure that your guess uses numbers 0-9 only'
  
    } else {
      message = ''
    }
  
    return message
}

function CompareGuess(solution, guess) {
    //cows
    //convert guess into an array of digits
    const guessArrayed = guess.toString().split('');
    const solutionArrayed = solution.toString().split('');
    let cows = 0;
    let bulls = 0;
    //console.log(guessArrayed);
    //for each element, check if this element is somewhere in the solutionArrayed
    for (let x = 0; x < guessArrayed.length; x++) {
      if (solutionArrayed.includes(guessArrayed[x])) {
        if (guessArrayed[x] == solutionArrayed[x]) {
          bulls = bulls + 1;
        } else {
          cows = cows + 1;
        }
      }
    }
    // console.log('cows: ' + cows);
    // console.log('bulls: ' + bulls);
  
      return `${bulls} bulls and ${cows} cows`;
  
  
}



export default InputGuess;