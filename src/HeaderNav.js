import React from "react";
import styled from "styled-components";
// import { ThreeLineHorizontal } from "akar-icons";
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
			NavBar
			{/* <Button onClick={handleClick}>jennykim.</Button> */}
			{/* <ul> */}
			{/* <NavBar> */}
			{/* <ThreeLineHorizontal strokeWidth={2} size={35} className="mobile" /> */}
			{/* <li className="non-mobile">
					<a href="#aboutme">About Me</a>
				</li>
				<li className="non-mobile">
					<a href="#projects">Projects</a>
				</li>
				<li className="non-mobile">
					<a href="#resume">Resume</a>
				</li>
				<li className="non-mobile">
					<a href="#contact">Contact</a>
				</li> */}
			{/* </NavBar> */}
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
	/* grid-column-start: 1; */
	font-family: DM Serif Display;
	font-size: 3em;
	background-color: transparent;
	border: none;
	text-align: center;
	padding: 0;
	grid-row: 1;
`;

const NavBar = styled.ul`
	display: grid;
	/* grid-column-end: 13; */
	/* grid-column: 8 / 13; */
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 1.375em;
	text-align: center;
	grid-row: 1;
	> li {
		/* grid-template-columns: repeat(4, 1fr); */
		/* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
		/* grid-row: 1; */
		padding: 1.125em 0 1.125em 0;
		> a {
			/* grid-column-start: 1; */
			text-decoration: none;
			color: #294234;
		}
	}
`;

// const NavListItems = styled.li`
// 	display: inline;
// 	color: red;
// `;
