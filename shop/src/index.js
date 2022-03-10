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

]

function reducer(state = 기본state, 액션){
              // state = 기본state 이건 dafault 파라미터 문법. 데이터초기값
    
      if ( 액션.type === '항목추가'){
        console.log('hi',액션.payload);
        let coppiedArray = [...state];

        let indexOfRepeated = null;
        
  
        for(let i=0; i<coppiedArray.length; i++){
       
          if(coppiedArray[i].id == 액션.payload.id){
            indexOfRepeated = i;
            break;
          }  
        }

        if(indexOfRepeated){
          coppiedArray[indexOfRepeated].quan++;
        }else{
          coppiedArray.push(액션.payload);
        }

        console.log('hi',coppiedArray);
         return coppiedArray;
        
        
        
      }
    
      else if ( 액션.type === '수량증가' ){
      let coppiedArray = [...state];
      coppiedArray[액션.데이터].quan++;

      return coppiedArray;
    } else if(액션.type === '수량감소'){
      let coppiedArray = [...state];
      // console.log(state[0].quan);
        if (coppiedArray[액션.데이터].quan > 0){
          // let coppiedArray = [...state];
          coppiedArray[액션.데이터].quan--;
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
