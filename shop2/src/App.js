import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginform from './Loginform';
import Nav from './Nav';
import { Route,Link,Swtitch } from 'react-router-dom';
import Shoesdata from './Shoesdata';

function App() {
  let [shoes, setShoes] = useState(Shoesdata);
  
  console.log(shoes);

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
