import StartScreen from './pages/start_screen'
import "./index.css"
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Press Start 2P']
  }
});

function App() {
  return (
    <div>
      <StartScreen />
    </div>
  );
}

export default App;
