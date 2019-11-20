import React from 'react';

import { renderApp } from './store';

import './App.css';

function App(props) {
  console.log(props);
  const handleClick = (color) => () => {
    props.store.changeState({
      type: 'CHANGE_COLOR',
      payload: color,
    });
    renderApp();
  };

  return (
    <div className="App">
      <div className="btn" onClick={handleClick('blue')}>Blue</div>
      <div className="btn" onClick={handleClick('red')}>Red</div>
    </div>
  );
}

export default App;
