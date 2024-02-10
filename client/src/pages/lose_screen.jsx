import React,{useEffect,useState} from "react";


const LoseScreen = (props) => {
    const [score, setScore] = useState(0);
    useEffect(() => {
        if (props.score > score) {
            setScore(props.score);
        }
    }, [props.score]);
    return (
        <div>
        <h1>You Lose!</h1>
        <h2>Your score: {score}</h2>
        <button onClick={props.resetGame}>Play Again</button>
        <button onClick={props.quitGame}>Quit</button>
        </div>
    );
}
