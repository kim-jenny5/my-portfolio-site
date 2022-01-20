import React from "react";
import { HeaderCont, Logo, NavBar, MobileNav } from "./style";
import MediaQuery from "react-responsive";
import { Menu } from "react-feather";

const handleRefresh = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
	window.location.href = "";
};

// const handleClick = () => {
// 	console.log("clicked!");
// 	return (
// 		<MobileNav>
// 			<ul>
// 				<li>
// 					<a href="#aboutme">About Me</a>
// 				</li>
// 				<li>
// 					<a href="#projects">Projects</a>
// 				</li>
// 				<li>
// 					<a href="#resume">Resume</a>
// 				</li>
// 				<li>
// 					<a href="#contact">Contact</a>
// 				</li>
// 			</ul>
// 		</MobileNav>
// 	);
// };

// const NavBarCont = () => (
// 	<NavBar>
// 		<li>
// 			<a href="#aboutme">About Me</a>
// 		</li>
// 		<li>
// 			<a href="#projects">Projects</a>
// 		</li>
// 		<li>
// 			<a href="#resume">Resume</a>
// 		</li>
// 		<li>
// 			<a href="#contact">Contact</a>
// 		</li>
// 	</NavBar>
// );

export default function Header() {
	return (
		<HeaderCont className="header">
			<Logo onClick={handleRefresh}>jennykim.</Logo>
			<MediaQuery maxWidth={480}>
				<Menu />
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
