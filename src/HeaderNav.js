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
	display: grid;
	grid-column: 8 / 13;
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 1.375em;
	text-align: center;
	/* grid-template-columns: subgrid; */
	> li {
		/* display: inline; */
		grid-template-columns: repeat(4, 1fr);
		grid-row: 1;
		padding: 1.125em 0 1.125em 0;
		> a {
			grid-column-start: 1;
			text-decoration: none;
			color: #294234;
		}
	}
`;

// const NavListItems = styled.li`
// 	display: inline;
// 	color: red;
// `;
