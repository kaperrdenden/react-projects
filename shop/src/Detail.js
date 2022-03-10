import React, {useContext, useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { 재고context } from './App';
import { Nav } from 'react-bootstrap';

import { CSSTransition } from 'react-transition-group';
import './Detail.scss';

import { connect } from 'react-redux';

let 박스 = styled.div`
    padding: 20px
`;
let 제목 = styled.h4`
    font-size: 25px; 
    // color: ${ props => props.색상 }
`;




function Detail(props ){


    let [alert , setAlert] = useState(true);
    let [input, setInput] = useState('');

    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);
    let 재고 = useContext(재고context);
    let [order, setOrder] = useState({
        itemTitle : '',
        itemQuan: '',
    })
    useEffect(()=>{


        // axios.get()

       let 타이머 = setTimeout(()=>{
            setAlert(false);
            console.log('안녕');
        },2000)
        return ()=>{
            clearTimeout(타이머);
        }
    },[alert]);
    let { id } = useParams();
  
    let history = useHistory();
    let sellectedShoe = null;
    
    // let uniqueId = null;
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
      });
    
    // console.log(sellectedShoe);
    return(
      <div className="container">
       
      <박스>
        <제목 className='red' >상세페이지</제목>
      </박스>
      {input}
     
      {
          alert 
          ? ( <div className='my-alert2'>
          <p>
              재고가 얼마 남지 않았습니다
          </p>
      </div> )
      : null
      }
     
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg" } width="100%" />
        </div>
        <div className="col-md-6 mt-4">

       
              <h4>{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
            
            {/* <h4 className="pt-5 red">{찾은상품.title}</h4> */}
            
            {/* <p>{찾은상품.price}</p> */}
        
          <Info 재고={props.재고}></Info>

          <button className="btn btn-danger" onClick={
              ()=>{
                  props.재고변경([9,10,11]);
                  console.log("찾은상품:",찾은상품);
                  props.dispatch({type: '항목추가', payload: {id:찾은상품.id, name:찾은상품.title,
                    quan: 1,
                }
             
            });
            props.itemIdCount.current++;
            history.push('/cart');
            // history.push 이게 없는 경우. 주문하기를 눌러서 데이터가
            // 장바구니에 올라가도 새로고침이 발생할 때 장바구니에 적재된걸
            // 확인할 수가 없는데 이걸  추가해서 자동으로 페이지를 강제이동시켜
            //강제새로고침을 막아준다.
              }
          }>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
              history.push('/asdasdasd');
          }}>뒤로가기</button> 
        </div>
      </div>
    <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
            <Nav.Link
             eventKey="link-0"
             onClick={()=>{
                 스위치변경(false);
                 누른탭변경(0);
             }} 
             >
             
                 Active</Nav.Link>
            {/* 버튼들마다 유니크한 eventKey를 부여해줄 수가 있다.(부트스트랩 문법이다.) */}

        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                eventKey="link-1"
                onClick={()=>{
                    스위치변경(false);
                    누른탭변경(1);
                }} >
                  Option 2</Nav.Link>
        </Nav.Item>
     
    </Nav>
    <CSSTransition in={스위치} classNames="wow" timeout={500}>
     <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
    </CSSTransition>
  </div>
    )
  }


  function TabContent(props){


    useEffect(()=>{
        props.스위치변경(true);
    })
    if(props.누른탭 === 0){
        return  <div>0번째 내용입니다</div>
    } else if (props.누른탭 === 1){
        return  <div>1번째 내용입니다</div>
    }
   
   
  

  }

  function Info(props){
      return (
          <p>재고:{props.재고[0]} </p>
      )
  }

  function state를props화(state){
      return{
          state : state.reducer,
      }
  }

  export default connect(state를props화)(Detail)