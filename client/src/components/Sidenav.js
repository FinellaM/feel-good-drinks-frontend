import { Link } from 'react-router-dom';

const Sidenav = () => {

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }
    
    const clickNav = (index) => {
        document.getElementsByClassName("nav-link")[0].style.color = "white";
        document.getElementsByClassName("nav-link")[1].style.color = "white";
        document.getElementsByClassName("nav-link")[2].style.color = "white";
        document.getElementsByClassName("nav-link")[3].style.color = "white";
        document.getElementsByClassName("nav-link")[4].style.color = "white";
        document.getElementsByClassName("nav-link")[index].style.color = "black";
    }

    return (
        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Link to="/" className="nav-link" onClick={() => clickNav(0)}>Home</Link>
            <Link to="/shop" className="nav-link" onClick={() => clickNav(1)}>Shop</Link>
            <Link to="/about-us" className="nav-link" onClick={() => clickNav(2)}>About Us</Link>
            <Link to="/contact-us" className="nav-link" onClick={() => clickNav(3)}>Contact Us</Link>
            <Link to="/stockist" className="nav-link" onClick={() => clickNav(4)}>Stockist</Link>
        </div>
    );
}
 
export default Sidenav;