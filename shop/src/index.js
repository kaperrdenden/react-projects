import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
import { BrowserRouter,HashRouter } from 'react-router-dom';
 
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';

let alert초기값 = true;

function reducer2(state = alert초기값, action){

  if (action.type === '닫기'){
    return false;
  } 
  else {
    return state;
  }
  
}

let 기본state = [
  {id : 0, name: '멋진신발', quan: 2},
  {id : 1, name: '멋진신발', quan: 2},
  {id : 2, name: '멋진신발', quan: 4},
]

function reducer(state = 기본state, 액션){
              // state = 기본state 이건 dafault 파라미터 문법. 데이터초기값
    
      if ( 액션.type === '항목추가'){
        

        let checkRepeatedId = state.map((item,i)=>{

          return (item.id === 액션.payload.id 
                  ? {id:item.id, name:item.name, quan:item.quan + Number(액션.payload.quan)}
                  : item
                  )
        }) 
        return checkRepeatedId;
      
     
    
      }
    
      else if ( 액션.type === '수량증가' ){
      let coppiedArray = [...state];
      coppiedArray[0].quan++;

      return coppiedArray;
    } else if(액션.type === '수량감소'){
      // console.log(state[0].quan);
        if (state[0].quan  > 0){
          let coppiedArray = [...state];
          coppiedArray[0].quan--;
          return coppiedArray;
        }
        return state;
    } else {
      return state;
    }
}

let store = createStore(combineReducers({reducer, reducer2}));
// 두개의 리듀서를 엮어준다.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
