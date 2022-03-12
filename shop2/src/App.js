import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginform from './Loginform';
function App() {
  return (
    <div className="App">
      <Loginform />
    </div>
  );
}
function Nav(){
  return(
    <>
      <div>
        <div className='column'></div>
        <div className='column'></div>
        <div className='column'></div>
      </div>
    </>
  )
}


export default App;
