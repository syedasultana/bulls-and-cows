import React from 'react';
//import logo from './logo.svg';
import './App.css';

import RandomNumber from './components/RandomNumber';
import InputGuess from './components/InputGuess';
import GiveUp from './components/GiveUp';

function App() {

  const [fourDigitNumber, setFourDigitNumber] = React.useState();
  const [result, setResult] = React.useState('');
  const [showSolution, setShowSolution] = React.useState(false);

  
  if (result == 'YOU GUESSED THE CORRECT NUMBER!🏆') {
    displaySolution();
  }

  

  return (
    <div className="App">
      <RandomNumber 
        fourDigitNumber={fourDigitNumber} 
        setFourDigitNumber={setFourDigitNumber}   
        showSolution={showSolution}
      /> 

      <InputGuess
        fourDigitNumber={fourDigitNumber}
        result={result}
        setResult={setResult}
      />

      <GiveUp 
        fourDigitNumber={fourDigitNumber}
        result={result}
        setResult={setResult}
      />

      <h3>{showSolution}</h3>
      
        
   


    </div>
  );

  function displaySolution() {
    console.log('displaySolution is executed');
    setShowSolution(true);

  }
}








export default App;
