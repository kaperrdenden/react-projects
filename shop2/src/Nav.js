import './Nav.css';


function Nav(){
    return(
      <>
        <nav className="main-nav">
            <div className="main-nav__column">Home</div>
            <div className="main-nav__column">Detail</div>
            <div className="main-nav__column">Cart</div>
        </nav>
      </>
    )
  }

  export default Nav;