/*eslint-disable */ 

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Self() {

  let [article, setArticle] = useState([
      { title:"남자 코트 추천",
        date:"2016년 2월 20일",
    },
      { title: "강남 우동 맛집",
        date:"2016년 2월 10일",
    },
      {title: "영화 추천",
      date:"2016년 3월 20일",
    }]
      
      );
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [inputs, setInputs] = useState({
      title:"",
      date:"",
  })

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
          article.map(function(article, i){
            return (
             <div className="list" key={i} onClick={ ()=>{ 누른제목변경(i) } }>
                <h4 onClick={ ()=>{ 누른제목변경(i) } }> {article.title} 
                  <span onClick={()=>{  따봉변경(따봉 + 1) } }>👍</span>
                </h4>
            <p>{article.date}</p>
                
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

        <form
            onSubmit={(e)=>{e.preventDefault()}} 
            className="publish">
                <input 
                    name="title"
                    placeholder="글제목"
                    value={inputs.title}
                    onChange={ (e)=>{
                        setInputs({
                            ...inputs,
                            [e.target.name]:e.target.value,
                        })
                }} />
                <input 
                    name="date"
                    placeholder="발행일"
                    value={inputs.date}
                    onChange={ (e)=>{
                        setInputs({
                            ...inputs,
                            [e.target.name]:e.target.value,
                        })
                }}/>
                <button onClick={()=>{
                    const coppiedArray = [...article];
                    coppiedArray.unshift(inputs);
                    console.log(coppiedArray)
                    setArticle(coppiedArray);
                    }}>저장
                </button>
        </form>

        <button onClick={ ()=> {modal변경(!modal) }}>열고닫기</button>
        <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
        <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
        <button onClick={  ()=>{ 누른제목변경(2) } }>버튼3</button>
        {
          modal === true
          ? <Modal article={article} 누른제목={누른제목} />
          : null
        }
    

    </div>
  );
}

function Modal(props){
  return(
  <div className='modal'>
    <h2>{props.article[props.누른제목].title}</h2>
    <p>날짜: {props.article[props.누른제목].date}</p>
    <p>상세내용</p>
  </div>
  )
}

export default Self;
