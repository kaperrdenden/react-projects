import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
function Detail(props ){

    let { id } = useParams();
    let history = useHistory();
    console.log(id);
    return(
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg" } width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
              history.push('/asdasdasd');
          }}>주문하기</button> 
        </div>
      </div>
  </div>
    )
  }

  export default Detail;