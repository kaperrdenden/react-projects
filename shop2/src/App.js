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
  let [cartdata, setCartdata] = useState(
    [
    {
        id:5,
        title:"temp item1",
        quan: 5,
    
    },
    {
        id:4,
        title:"temp item2",
        quan: 2,
    },
]
    )
  console.log(shoes);

  return (
    <div className="App">
      
      <Route path='/' exact>
        <Loginform />
      </Route>

      <Route path='/homepage' exact>
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
          <Detail shoes={shoes} cartdata={cartdata} setCartdata={setCartdata} stock={stock} setStock={setStock} />
      </Route>
      
      <Route path='/cart'>
        <Cart shoes={shoes} cartdata={cartdata} setCartdata={setCartdata}/>
      </Route>
    </div>
  );
}



export default App;
