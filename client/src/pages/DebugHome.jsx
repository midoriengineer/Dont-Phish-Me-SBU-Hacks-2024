import React, {useState} from 'react';
import Debug from './Debug';

function DebugHome() {

  const [debug, setDebug] = useState(false);
  const [transition, setTransition] = useState(false);

  function transitionPage(){
    setTransition(true);
    setTimeout(() => {
      setDebug(true);
    }, 400);
    }

  return(
    <>
    {
      debug ? <Debug /> :  
      
      <div className={`titlescreen-background ${transition ? 'zoomed' : ''}`}>

<div className="button-container">
            <button onClick={transitionPage}>ENTER</button>
          </div>
            
      </div>

    }
      
    </>
  )  
}



export default DebugHome;
