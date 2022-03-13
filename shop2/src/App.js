import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginform from './Loginform';
import Nav from './Nav';
import { Route,Link,Swtitch } from 'react-router-dom';
import Shoesdata from './Shoesdata';
import Card from './Card';
import Detail from './Detail';


function App() {
  let [shoes, setShoes] = useState(Shoesdata);
  
  console.log(shoes);

  return (
    <div className="App">
      
      <Route path='/' exact>
        <Loginform />
      </Route>

      <Route path='/homepage' >
        <Nav />
        {
          shoes.map((shoe,i)=>{
            return(

              <Card shoe={shoe} i={i} key={i} />
            )
          })
        }
      </Route>
      
      <Route path='/detail/:id'>
          <Detail shoes={shoes} />
      </Route>
      
    </div>
  );
}



export default App;
