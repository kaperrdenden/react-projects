import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginform from './Loginform';
import Nav from './Nav';
import { Route,Link,Swtitch } from 'react-router-dom';
import Shoesdata from './Shoesdata';
import Card from './Card';
import Detail from './Detail';
import Cart from './Cart';

function App() {
  let [shoes, setShoes] = useState(Shoesdata);
  let [stock, setStock] = useState([10,12,14]);
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
          <Detail shoes={shoes} stock={stock} setStock={setStock} />
      </Route>
      
      <Route path='/cart'>
        <Cart shoes={shoes}/>
      </Route>
    </div>
  );
}



export default App;
