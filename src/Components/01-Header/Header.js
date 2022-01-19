import React from "react";
import { HeaderCont, Button, NavBar, MobileNav } from "./style";
import MediaQuery from "react-responsive";
// import { ThreeLineHorizontal } from "akar-icons";
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
		<HeaderCont>
			<Button onClick={handleRefresh}>jennykim.</Button>
			{/* <MediaQuery minWidth={320} maxWidth={480}> */}
			<MediaQuery maxWidth={480}>
				{/* <ThreeLineHorizontal strokeWidth={2} size={30} className="hamburger" /> */}
				<Menu />
			</MediaQuery>
			<MediaQuery minWidth={481}>
				{/* {NavBarCont} */}
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
