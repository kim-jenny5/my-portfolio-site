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
	grid-column: 1 / 4;
	font-family: DM Serif Display;
	font-size: 3em;
	background-color: transparent;
	border: none;
	text-align: start;
	padding: 0;
`;

const NavBar = styled.ul`
	list-style: none;
	grid-column: 8 / 13;
	padding: 0;
	margin: 0;
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
