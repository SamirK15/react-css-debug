import React from 'react';
import './App.css';
import CSSDebug from './CSSDebug'

function App() {
  return (
    <div className="App">
      <div id='id-test'>
        Id-test
      </div>
      <p>
        Hello World
      </p>
      <div class="class-test">
        class-test
      </div>
      <CSSDebug></CSSDebug>
    </div>
  );
}

export default App;
