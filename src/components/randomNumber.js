import React from 'react';

function RandomNumber({ fourDigitNumber, setFourDigitNumber, showSolution }) {
    const min = 1000;
    const max = 9999;
    let randomNumber = Math.round(Math.random() * (max - min) + min);

    
    
    return (
        <>
        <button onClick={() => {
            setFourDigitNumber(randomNumber); 
            console.log(fourDigitNumber);
        }}>generate random number</button>

            {/* <h3>{fourDigitNumber}</h3> */}
       
        
        </>
    )
}

export default RandomNumber;