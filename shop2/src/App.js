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
        <div className='column'>home</div>
        <div className='column'>detail</div>
        <div className='column'>뒤로가기</div>
      </div>
    </>
  )
}


export default App;
