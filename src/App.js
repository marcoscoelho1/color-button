import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disableColorButon, setDisabledColorButton] = useState(false)

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disableColorButon}
      >
        Change to {newButtonColor}
      </button>
      <input 
        id="disable-button-checkbox"
        aria-checked={disableColorButon}
        type="checkbox" 
        value={disableColorButon} 
        onClick={() => setDisabledColorButton(!disableColorButon)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
