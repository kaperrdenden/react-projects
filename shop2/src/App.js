import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginform from './Loginform';
import Nav from './Nav';
import { Route,Link,Swtitch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Route path='/' exact>
        <Loginform />
      </Route>
      <Route path='/homepage'>
        <Nav />
      </Route>
    
      
    </div>
  );
}



export default App;
