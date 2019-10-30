import React from 'react';


function GiveUp({ fourDigitNumber, result, setResult }) {
      return (
        <>
        <button onClick={() => {
            setResult(showAnswer(fourDigitNumber));
        }}>Give up</button>
        </>
      )
    
}

function showAnswer(fourDigitNumber) {
    return `${fourDigitNumber}`;
}


export default GiveUp;