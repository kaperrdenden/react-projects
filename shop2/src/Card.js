import './Card.css';
import { Route,Link,Swtitch,useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
function Card(props){
    let {id} = useParams();
    let history  = useHistory();
    console.log(props);
    return(
        <div className='homepage-imgs' 
            onClick={()=>{
                history.push('./detail/' + (props.i))
            }}
        >
                <div>
                    <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} />
                    <h3>{props.shoe.title}</h3>
                    <p>{props.shoe.price}원</p>
                </div>
        </div>
    )
}

export default Card;