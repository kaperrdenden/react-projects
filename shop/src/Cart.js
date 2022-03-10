import React from 'react';
import {Table}  from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
function Cart(props){

    let state = useSelector((state)=> state);
    // console.log(state);
    // 리덕스에있는 모든 state
    let dispatch = useDispatch();
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
            state.reducer.map((item, i)=>{
                return(
                   <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quan}</td>
                    <td>
                        <button onClick={()=> {
                            dispatch({ type:'수량증가', 데이터:item.id})
                          }}>+</button>
                        <button onClick={()=> {
                            dispatch({ type:'수량감소', 데이터:item.id })
                          }}>-</button>

                    </td>
                    
                   </tr>
                )
            })
        }
   
      
    </tbody>
  </Table>
{
    props.alert열렸니 === true
    ? ( <div className='my-alert2'>
    <p>지금 구매하시면 신규할인 20%</p>
    <button onClick={()=>{
        props.dispatch({type:"닫기"});
    }}>닫기</button>
</div>)
: null
}
 
</div>
    )
}

// function 함수명(state){
//     // 이 함수는 redux store의 값들을 가져와서 props로 변환해주는 함수이다.
//     // 즉 state를 props화 시켜준다.
//     return {
//         state: state.reducer,
//         alert열렸니 : state.reducer2,
//         // redux store의 state값 중 name이라는 값을 가져와서 상품명에 담는다

//     }
// }
// export default connect(함수명)(Cart)

export default Cart;