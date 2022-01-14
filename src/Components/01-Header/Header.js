import React from "react";
import { HeaderCont, Button, NavBar } from "./style";
import { ThreeLineHorizontal } from "akar-icons";
// import { HeaderCont } from "./App";

const handleClick = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
	window.location.href = "";
};

// const NavBarComp = () => {
// 	return (
// 		<NavBar>
// 			<li>
// 				<a href="#aboutme">About Me</a>
// 			</li>
// 			<li>
// 				<a href="#projects">Projects</a>
// 			</li>
// 			<li>
// 				<a href="#resume">Resume</a>
// 			</li>
// 			<li>
// 				<a href="#contact">Contact</a>
// 			</li>
// 		</NavBar>
// 	);
// };

export default function Header() {
	return (
		<HeaderCont>
			<Button onClick={handleClick}>jennykim.</Button>
			{window.innerWidth >= "1200" ? (
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
			) : (
				<ThreeLineHorizontal strokeWidth={2} size={24} />
			)}
		</HeaderCont>
	);
}
