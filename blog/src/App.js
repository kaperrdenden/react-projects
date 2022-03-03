/*eslint-disable */ 

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "영화 추천"]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);


  let [입력값, 입력값변경] = useState('');
  function 제목바꾸기(){
    let coppiedArray = [...글제목];
    coppiedArray[0] = "여자 코트 추천";
    글제목변경(coppiedArray);
  }

  function 반복된UI(){
    var 어레이 = [];
    for (var i=0; i<3; i++){
      어레이.push(<div>안녕</div>);

    }

    return 어레이
  }

  return (
    <div className="App">
     
        <div className="black-nav">
          <div>개발 blog</div>

        </div>
  
        {
          글제목.map(function(글, i){
            return (
             <div className="list" key={i}>
                <h4 onClick={ ()=>{ 누른제목변경(i) } }> {글} 
                  <span onClick={()=>{  따봉변경(따봉 + 1) } }>👍</span>
                </h4>
              
                <p>2월 17일 발행</p>
                
              <hr/>
           </div>
           )
           
          })
        }
{/* 
        {입력값}
        <input  value={입력값}  onChange={(e)=>{
           입력값변경(e.target.value);  
           } } /> */}

        <div className="publish">
           <input onChange={ (e)=>{
              입력값변경(e.target.value)
           }} />
           <button onClick={()=>{
             const coppiedArray = [...글제목];
             coppiedArray.unshift(입력값);
             console.log(coppiedArray)
             글제목변경(coppiedArray);
               }}>저장</button>
        </div>

        <button onClick={ ()=> {modal변경(!modal) }}>열고닫기</button>
        <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
        <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
        <button onClick={  ()=>{ 누른제목변경(2) } }>버튼3</button>
        {
          modal === true
          ? <Modal 글제목={글제목} 누른제목={누른제목} />
          : null
        }
    

    </div>
  );
}

function Modal(props){
  return(
  <div className='modal'>
    <h2>{props.글제목[props.누른제목]}</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
