import React from 'react';
//import logo from './logo.svg';
import './App.css';

import RandomNumber from './components/RandomNumber';
import InputGuess from './components/InputGuess';

function App() {

  const [fourDigitNumber, setFourDigitNumber] = React.useState(/*GenerateRandomNo()*/);
  const [warnMessage, setWarnMessage] = React.useState('')

  return (
    <div className="App">
      <RandomNumber 
        fourDigitNumber={fourDigitNumber} 
        setFourDigitNumber={setFourDigitNumber}   
      /> 

      <InputGuess
        
        setWarnMessage={setWarnMessage}
        fourDigitNumber={fourDigitNumber}
      />

        
      <p>{warnMessage}</p>


    </div>
  );
}








export default App;
