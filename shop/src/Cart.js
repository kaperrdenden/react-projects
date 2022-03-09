import React from 'react';
import {Table}  from 'react-bootstrap';
import { connect } from 'react-redux';
function Cart(props){
    return (
     
            <div>
  
  <Table responsive="md">
    <thead>
      <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경</th>
      </tr>
    </thead>
    <tbody>
        
        {
            props.state.map((item, i)=>{
                return(
                   <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quan}</td>
                    <td>
                        <button onClick={()=> {
                            props.dispatch({ type:'수량증가' })
                          }}>+</button>
                        <button onClick={()=> {
                            props.dispatch({ type:'수량감소' })
                          }}>-</button>

                    </td>
                    
                   </tr>
                )
            })
        }
   
      
    </tbody>
  </Table>
</div>
    )
}

function 함수명(state){
    // 이 함수는 redux store의 값들을 가져와서 props로 변환해주는 함수이다.
    // 즉 state를 props화 시켜준다.
    return {
        state: state,
        // redux store의 state값 중 name이라는 값을 가져와서 상품명에 담는다

    }
}
export default connect(함수명)(Cart)

// export default Cart;