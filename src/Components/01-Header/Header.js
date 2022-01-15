import React from "react";
import { HeaderCont, Button, NavBar, HamburgerMenu } from "./style";
import MediaQuery from "react-responsive";
import { ThreeLineHorizontal } from "akar-icons";

const handleClick = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
	window.location.href = "";
};

export default function Header() {
	return (
		<HeaderCont>
			<Button onClick={handleClick}>jennykim.</Button>
			<MediaQuery minWidth={320} maxWidth={480}>
				<HamburgerMenu>
					<ThreeLineHorizontal strokeWidth={2} size={30} />
				</HamburgerMenu>
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
