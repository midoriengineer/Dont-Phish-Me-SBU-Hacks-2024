
import React,{useEffect,useState} from "react";


const winScreen = ({props}) => {
    
    
    
    return (
        <div>
        <h1>You Win!</h1>
        <button onClick={props.resetGame}>Go back Home</button>
        <h1>Score</h1>
        
    
        </div>

    );
    }


export default winScreen;
