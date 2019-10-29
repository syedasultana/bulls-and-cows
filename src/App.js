import React from 'react';
//import logo from './logo.svg';
import './App.css';

import RandomNumber from './components/RandomNumber';
import InputGuess from './components/InputGuess';

function App() {

  const [fourDigitNumber, setFourDigitNumber] = React.useState(/*GenerateRandomNo()*/);
  

  return (
    <div className="App">
      <RandomNumber 
        fourDigitNumber={fourDigitNumber} 
        setFourDigitNumber={setFourDigitNumber}   
      /> 

      <InputGuess
        fourDigitNumber={fourDigitNumber}
      />

        
   


    </div>
  );
}








export default App;
