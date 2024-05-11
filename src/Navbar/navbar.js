import { useRef  } from "react";
// import { FaBars, FaTimes } from "d:/portfolio/NEW/contact-page-rozgaar/node_modules/react-icons/fa/index.js";
import "./navbar.css";
import { Link } from "react-router-dom";
// import about from '../AboutUs/aboutus';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


	return (
		<header style={{position : "relative"}}>
			<h2><Link to = "/"><b>RozGaar</b></Link></h2>
			<nav ref={navRef}>
					{/* <p><Link to ="/Employeeregistration">Employee</Link></p>
					<p><Link to ="/Companyregistration">Company</Link></p> */}
					<p><Link to ="/about">About</Link></p>
					<p><Link to ="/contact">Contact</Link></p>
					<p><Link to ="/notices">Notices</Link></p>
				

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					{/* <FaTimes /> */}
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
		</header>
	);
}

export default Navbar;
