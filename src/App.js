import React from 'react';
import { Header, Main, Hoc } from './components'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Hoc />
    </div>
  );
}

export default App;
