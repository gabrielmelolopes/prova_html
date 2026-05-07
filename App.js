import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemove = () => {
    setItems(items.slice(1));
  };

  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div className="main-wrapper">
      <div id="container">
        <div className="lista">
          <h3>Minha Lista</h3>
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <button onClick={handleAdd}>Adicionar</button>
        </div>
      </div>

      <div id="container">
        <div className="container2">
          <ul style={{ color: isCompleted ? 'green' : 'black' }}>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={handleRemove}>Remover</button>
          <button onClick={handleComplete}>Concluir Tudo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
