import React from "react";
import styled from "styled-components";
import { HeaderCont } from "./App";

const handleClick = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
	// window.location.reload(false);
	window.location.href = "";
};

export default function HeaderNav() {
	return (
		// <div className="title-text header-nav">
		<>
			{/* <span className="logo">jennykim.</span> */}
			{/* <Header> */}
			{/* <HeaderCont> */}

			<Button onClick={handleClick}>jennykim.</Button>
			{/* <ul> */}
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
			{/* </ul> */}
			{/* </HeaderCont> */}
			{/* </Header> */}
		</>
		// </div>
	);
}

// const Header = styled.div`
// 	/* position: fixed; */
// 	width: 100vw;
// 	grid-area: hd;
// 	background-color: lightgray;
// `;

// const Header = styled.div``;

// const

const Button = styled.button`
	grid-column: 2 / span 4;
	/* font-family: DM Serif Display; */
`;

const NavBar = styled.ul`
	list-style: none;
	grid-column-end: 12;
	> li {
		display: inline;
		// 	color: red;
		> a {
			text-decoration: none;
			color: #294234;
		}
	}
`;

// const NavListItems = styled.li`
// 	display: inline;
// 	color: red;
// `;
