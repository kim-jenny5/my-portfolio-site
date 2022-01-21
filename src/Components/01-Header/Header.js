import React from "react";
import { HeaderCont, Logo, NavBar, MobileHeaderCont } from "./style";
import MediaQuery from "react-responsive";

const handleRefresh = () => {
	window.location.href = "";
	window.scrollTo({ top: 0, behavior: "smooth" });
};

// const handleClick = (e) => {
// 	console.log("clicked!");
// };

export default function Header() {
	return (
		<>
			<MediaQuery maxWidth={480}>
				<MobileHeaderCont className="header">
					<Logo onClick={handleRefresh}>jennykim.</Logo>
					{/* <Menu onClick={handleClick} className="hamburger" />
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
					</MobileNav> */}
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
