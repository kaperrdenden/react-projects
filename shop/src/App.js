import logo from './logo.svg';
import './App.css';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import React, { useContext, useState } from 'react';
import Data from "./data.js";
import Detail from './Detail';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

import Cart from './Cart';
export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고,재고변경] = useState([10,11,12]);


  console.log(shoes);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/"> Home </Nav.Link>
        <Nav.Link as={Link} to="/detail">Detail </Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
  <Route exact path="/">
    <div className='jumbotron'>
        <h1>20%</h1>
        <p>
          fmnwokfdejksdlfnm
          asdkalsdlaskdlasd
          dsklajshdklasdkjasd
          aksdhjaskdhkajsd
          kasdnhaslkdjnaksdjnasdsdlkjnasd sdfnmlksd fklsdjfnjklsdnf kskfdjsdf
        </p>
        <button type="button" className="btn btn-primary">Primary</button>
    </div>
    <div className='container'>

      <재고context.Provider value={재고}>
        <div className='row'>
          {shoes.map((shoe,i) => {
            return(
              <Card shoe={shoe} i={i} key={i} />
            )
          })}
        </div>
      </재고context.Provider>
        <button className="btn btn-primary" 
          onClick={()=>{

             
            // axios.post('서버URL', {id: 'hello', pw : 1234}).then;

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
            
              shoes변경([...shoes, ...result.data]);
             
            }) //데이터를 가져오는데에 성공했을 경우
            .catch(()=>{
              console.log('실패');
             }) // 실패했을경우
            ;

          }}
        >더보기</button>
    </div>
    </Route>
  <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고context.Provider>
  </Route>

  <Route path="/cart">
    <Cart />
  </Route>
  {/* <Route path="/어쩌구" component={Modal}></Route> */}
  
  {/* <Route path="/:id">
          <div> 아무거나 적었을때</div>
  </Route> */}

 </Switch>
    </div>
  );
}


function Card(props){
  
  let 재고 = useContext(재고context);
  
  return(
 
    <div className='col-md-4'>
     
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%"/>
    <h4>{props.shoe.title}</h4>
    <p>{props.shoe.price}</p>
   <Text/>
    
  </div>
  )
}
function Text(){
  let 재고 = useContext(재고context);
  return(
    <p>재고: {재고}</p>
  )
}
export default App;
