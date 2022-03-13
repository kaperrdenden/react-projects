import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './Detail.css';
function Detail(props){
    let { id } = useParams();
    console.log(id);
    return(
        <div className="detail">
         
            <img src={'https://codingapple1.github.io/shop/shoes' +(+id+1)+ '.jpg'} />
            {props.shoes[1].title}

        </div>
    )
}

export default Detail;
