import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function Navbar() {
	const navRef = useRef();
const navigate=useNavigate()
const token = localStorage.getItem("token");
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	  };
	return (
		<header>
			<h3 className="logo">LOGO</h3>
			<nav ref={navRef}>
				<Link to='/home'> <a >Home</a> </Link>
				<Link to='/aboutus'> <a >About</a> </Link>
				<Link to='/newsletter'>NewsLetter</Link>
				
				<Link to='/booking'> <a >Booking</a> </Link>
				<Link to='/contactus'> <a >Contact</a> </Link>
				
				{token ? (
          <a onClick={handleLogout}>Logout</a>
        ) : (
          null
        )}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;