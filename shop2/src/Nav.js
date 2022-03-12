import './Nav.css';


function Nav(){
    return(
      <>
        <nav className="main-nav">
            <div className="main-nav__column">Home</div>
            <div className="main-nav__column">Detail</div>
            <div className="main-nav__column">Cart</div>
        </nav>
        <Card />
      </>
    )
  }

function Card(){
    return(
        <div className='homepage-imgs'>
            <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} />
            <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} />
            <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} />
        </div>
    )
}

  export default Nav;