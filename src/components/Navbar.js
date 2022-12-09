import React, {useState} from "react"
import "./NavbarStyle.css"

const Navbar = () => {

	return <>
		<div className="nav-warp">
			<nav className="navbar">
				<h1>Dorothy's Shop</h1>
				<ul className="links">
					<li><a href="home.html">Home</a></li>
					<li><a href="login.html">Login</a></li>
					<li><a href="account.html">Account</a></li>
					<li><a href="market.html">Marketplace</a></li>
				</ul>
			</nav>
			<hr className="nav-line"></hr>
		</div>
	</>
}

export default Navbar
