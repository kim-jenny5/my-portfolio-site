// import React from "react";
import React, { Component } from "react";
import { HeaderCont, Button, NavBar } from "./style";
import { ThreeLineHorizontal } from "akar-icons";
// import { HeaderCont } from "./App";

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

// export default function Header() {
// 	return (
// 		<HeaderCont>
// 			<Button onClick={handleClick}>jennykim.</Button>
// 			{window.innerWidth >= "1200" ? (
// 				<NavBar>
// 					<li>
// 						<a href="#aboutme">About Me</a>
// 					</li>
// 					<li>
// 						<a href="#projects">Projects</a>
// 					</li>
// 					<li>
// 						<a href="#resume">Resume</a>
// 					</li>
// 					<li>
// 						<a href="#contact">Contact</a>
// 					</li>
// 				</NavBar>
// 			) : (
// 				<ThreeLineHorizontal strokeWidth={2} size={24} />
// 			)}
// 		</HeaderCont>
// 	);
// }

export default class Header extends Component {
	state = {
		device: ""
	};

	handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		window.location.href = "";
	};

	render() {
		return (
			<HeaderCont>
				<Button onClick={this.handleClick}>jennykim.</Button>
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
}
