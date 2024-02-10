


const winScreen = ({props}) => {
    
    
    
    return (
        <div>
        <h1>You Win!</h1>
        <button onClick={props.resetGame}>Play Again</button>
        <button onClick={props.quitGame}>Quit</button>
        </div>
        
    );
    }


export default winScreen;
