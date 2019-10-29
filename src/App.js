import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

  const [fourDigitNumber] = React.useState(GenerateRandomNo());
  const [guess, setGuess] = React.useState();
  const [typedInput, setTypedInput] = React.useState('');
  const [result, setResult] = React.useState('');

  return (
    <div className="App">
      <h3>{fourDigitNumber}</h3>
    
      <input
        onChange={event => setTypedInput(event.target.value)}
        placeholder="guess 4 digit number"
      />
      <button onClick={() => {
        setGuess(typedInput);
        //console.log(typedInput);
        let comparisonResult = CompareGuess(fourDigitNumber, typedInput);
        setResult(comparisonResult);
      }}>Submit</button>

      <h3>{result}</h3>

      
     
    </div>
  );
}

function GenerateRandomNo() {
  //between 1000 and 9999
  const min = 1000;
  const max = 9999;
  return Math.round(Math.random() * (max - min) + min);
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

export default App;
