import './Card.css';

function Card(props){
 
    return(
        <div className='homepage-imgs'>
            {props.shoes.map((shoe,i)=>{
                return (
                
                <div key={i}> 
                    <img src={'https://codingapple1.github.io/shop/shoes' + (i+1) + '.jpg'} />
                    <h3>{props.shoes[i].title}</h3>
                    <p>{props.shoes[i].price}원</p>
                    
                </div>
                )
            })}
            
        
        </div>
    )
}

export default Card;