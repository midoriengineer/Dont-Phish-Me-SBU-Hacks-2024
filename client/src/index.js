import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from './pages/start_screen';
import GameScreen from './pages/game_screen';
import WinScreen from './pages/win_screen';
import LoseScreen from './pages/lose_screen';


const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/win" element={<WinScreen />} />
        <Route path="/lose" element={<LoseScreen />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);