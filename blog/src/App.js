/*eslint-disable */ 

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "영화 추천"]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);


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
        <button onClick={ 제목바꾸기 }> 버튼 </button>
        <div className="list">
         <h4> {글제목[0]}
          <span onClick={()=>{  따봉변경(따봉 + 1) } }>👍</span>
           {따봉} 
           </h4>
         <p>2월 17일 발행</p>
          <hr/>
        </div>
        <div className="list">
         <h4> {글제목[1]} </h4>
         <p>2월 17일 발행</p>
          <hr/>
        </div>
        <div className="list">
         <h4 onClick={()=>{modal변경(!modal)}}> {글제목[2]} </h4>
         <p>2월 17일 발행</p>
          <hr/>
        </div>
      {
        반복된UI()
      }
        {
          글제목.map(function(글){
            return  (<div className="list">
              <h4> {글} 
              <span onClick={()=>{  따봉변경(따봉 + 1) } }>👍</span>
              </h4>
              <p>2월 17일 발행</p>
                dsadasd
              <hr/>
           </div>)
           
          })
        }

        {
          modal === true
          ? <Modal/>
          : null
        }
    

    </div>
  );
}

function Modal(){
  return(
  <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
