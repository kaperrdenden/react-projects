import { useState } from 'react';
import './Cart.css';
function Cart(props) {
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
    return(
        <>
            <div className="table">
                <section>
                    <h4>#</h4>
                    <h4>id</h4>
                    <h4>상품명</h4>
                    <h4>수량</h4>

                </section>
                {cartdata.map((item, i)=>{
                    return(
                     <section key={i} >
                        <h4>{item.id}</h4>
                        <h4>{item.title}</h4>
                        <h4>수량: {item.quan}</h4>
                        <div>

                        
                        <button
                            onClick={
                                ()=>{
                                    let coppiedArray = [...cartdata];
                                    coppiedArray[i].quan++;
                                   setCartdata(
                                        coppiedArray
                                   )
                                }
                            }
                        >
                            +
                        </button>
                        <button 
                         onClick={
                            ()=>{
                                if( item.quan > 0){
                                    let coppiedArray = [...cartdata];
                                    coppiedArray[i].quan--;
                                   setCartdata(
                                        coppiedArray
                                   )
                                }
                               
                            }
                        }>
                            -
                        </button>
                        </div>
                    </section>  
         
                    )
                })}
              {console.log(cartdata)}
                   
               
            </div>
        </>
    )
}

export default Cart;