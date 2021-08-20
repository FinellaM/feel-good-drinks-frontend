import { Link } from 'react-router-dom';

const Header = ({ cart, windowListener }) => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("mySidenav").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";

        window.addEventListener('click', windowListener);
    }

    const openCart = () => {
        document.getElementById("myCart").style.width = "300px";
        document.getElementById("myCart").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";

        window.addEventListener('click', windowListener);
    }

    return (
        <header className="mb-0" style={{ backgroundColor: 'white' }}>

            <nav className="navbar navbar-expand-lg bg-green">
                <div className="col-6 col-sm-6 col-md-4">
                    <a href="/" className="logo">
                        <img src={"../feelgooddrinks_logo.png"} alt="logo" style={{ height: '50px' }} />
                    </a>
                </div>

                <div className="col text-right">
                    <button className="btn" id="cart-icon" style={{
                        position: 'relative',
                    }}>
                        <i className="fa fa-shopping-cart cart-icon" onClick={openCart} style={{
                            fontSize: '30px', //Size for Cart icon
                        }}></i>
                        <span id="cart-badge" style={{
                            backgroundColor: '#e4690c',
                            position: 'absolute',
                            top: '2px',
                            left: '33px',
                            padding: '0px 5px',
                            borderRadius: '5px',
                            fontSize: '10px',
                            color: 'white',
                        }}>{cart.length}</span>
                    </button>
                    <button className="btn nav-icon" id="menu-icon" onClick={openNav} style={{
                        fontSize: '30px', //Size for Sidenav icon
                    }}>
                        &#9776;
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;