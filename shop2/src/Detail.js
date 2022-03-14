import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './Detail.css';
function Detail(props) {
    let history = useHistory();

    let { id } = useParams();
    console.log(id);
    return (
        <div className="detail">

            <img src={'https://codingapple1.github.io/shop/shoes' + (+id + 1) + '.jpg'} />
            <div>
                <h4>{props.shoes[id].title}</h4>
                <p>재고:{props.stock[id]}</p>
                <span> {props.shoes[id].price}원 </span>

            </div>
            <button onClick={() => {
                // console.log(props.stock[id]);
                let coppiedStock = [...props.stock];
                coppiedStock[id] -= 1;
                props.setStock(coppiedStock);
                let coppiedCartdata = [...props.cartdata];
                let existOrNot = null;
                for (let i = 0; i < props.cartdata.length; i++) {
                    if (props.cartdata[i].id == props.shoes[id].id) {
                        existOrNot = i;
                    }
                }

                coppiedCartdata.push({
                    id: 4,
                    title: "temp item2",
                    quan: 2,
                });
                props.setCartdata(coppiedCartdata);

                history.push('/cart');
            }}>
                주문하기
            </button>
            <button
                onClick={() => {
                    history.goBack();
                }}
            >
                뒤로가기
            </button>
        </div>
    )
}

export default Detail;
