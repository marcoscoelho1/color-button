import { useState } from 'react';
import './App.css';

export const replaceCamelWithSapaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState(replaceCamelWithSapaces('Medium Violet Red'))
  const [disableColorButon, setDisabledColorButton] = useState(false)

  const newButtonColor = buttonColor === 'Medium Violet Red' ? 'Midnight Blue' : 'Medium Violet Red'

  return (
    <div>
      <button 
        style={{backgroundColor: disableColorButon? 'gray' : buttonColor}}
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
