import React, { useEffect } from "react";
import { HeaderCont, Logo, NavBar, MobileNav, MobileHeaderCont } from "./style";
import MediaQuery from "react-responsive";
import { Menu, X } from "react-feather";
import { slide as MobileMenu } from "react-burger-menu";
import "animate.css";

const handleRefresh = () => {
	window.location.href = "";
	window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleClick = (e) => {
	console.log("clicked!");
	const nav = document.querySelector(".mobile-nav");
	const x = document.querySelector(".x");
	const hamburger = document.querySelector(".hamburger");

	if (nav.style.display === "none") {
		nav.style.display = "block";
		// hamburger.style.display = "none";
		// x.style.display = "block";
	} else {
		nav.style.display = "none";
		// hamburger.style.display = "none";
		// X.style.display = "block";
	}

	// logo.style.display = "none";
	// hamburger.style.display = "none";

	// console.log(nav);

	// (
	// 	<MobileNav>
	// 	// 	<ul>
	// 	// 		<li>
	// 	// 			<a href="#aboutme">About Me</a>
	// 	// 		</li>
	// 	// 		<li>
	// 	// 			<a href="#projects">Projects</a>
	// 	// 		</li>
	// 	// 		<li>
	// 	// 			<a href="#resume">Resume</a>
	// 	// 		</li>
	// 	// 		<li>
	// 	// 			<a href="#contact">Contact</a>
	// 	// 		</li>
	// 	// 	</ul>
	// 	// </MobileNav>
	// );
};

export default function Header() {
	return (
		<>
			<MediaQuery maxWidth={480}>
				<MobileHeaderCont className="header">
					<Logo onClick={handleRefresh} className="logo">
						jennykim.
					</Logo>
					<Menu onClick={handleClick} className="hamburger" />
					{/* <X className="x" /> */}
					<MobileNav className="mobile-nav animate__animated animate__fadeIn">
						<div>
							<li className="menu-item">
								<a href="#aboutme">About Me</a>
							</li>
							<li className="menu-item">
								<a href="#projects">Projects</a>
							</li>
							<li className="menu-item">
								<a href="#resume">Resume</a>
							</li>
							<li className="menu-item">
								<a href="#contact">Contact</a>
							</li>
						</div>
					</MobileNav>
				</MobileHeaderCont>
			</MediaQuery>
			<MediaQuery minWidth={481}>
				<HeaderCont>
					<Logo onClick={handleRefresh}>jennykim.</Logo>
					<NavBar>
						<li>
							<a href="#aboutme">About Me</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#resume">Resume</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</NavBar>
				</HeaderCont>
			</MediaQuery>
		</>
	);
}
