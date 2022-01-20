import React, { useEffect } from "react";
import { HeaderCont, Logo, NavBar, MobileNav } from "./style";
import MediaQuery from "react-responsive";
import { Menu } from "react-feather";
import { slide as MobileMenu } from "react-burger-menu";

const handleRefresh = () => {
	window.location.href = "";
	window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleClick = (e) => {
	console.log("clicked!");
	const nav = document.querySelector(".mobile-nav");
	nav.style.display = "block";

	// console.log(nav);

	return;
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

// const handleOpen = () => {
// 	console.log("clicked!");
// };

export default function Header() {
	// useEffect(() => {
	// 	const nav = document.querySelector(".mobile-nav");

	// 	return () => {
	// 		nav.style.display = "none";
	// 	};
	// });

	return (
		<HeaderCont className="header">
			<Logo onClick={handleRefresh}>jennykim.</Logo>
			<MediaQuery maxWidth={480}>
				<div>
					<Menu onClick={handleClick} />
					<MobileNav className="mobile-nav">
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
					</MobileNav>
					{/* <MobileMenu right width={400}>
					</MobileMenu> */}
				</div>
			</MediaQuery>
			<MediaQuery minWidth={481}>
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
			</MediaQuery>
		</HeaderCont>
	);
}
