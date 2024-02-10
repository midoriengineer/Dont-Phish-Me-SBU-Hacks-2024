import React,{useEffect,useState} from "react";

const loseScreen = ({props}) => {
    
    
    
    return (
        <div>
        <h1>You Win!</h1>
        <button onClick={props.resetGame}>Play Again</button>
        <button onClick={props.quitGame}>Quit</button>
        </div>
        
    );
    }


export default loseScreen;
