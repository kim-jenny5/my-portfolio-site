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
		<div className="title-text header-nav">
			{/* <span className="logo">jennykim.</span> */}
			{/* <Header> */}
			<HeaderCont>
				<Button onClick={handleClick}>jennykim.</Button>
				{/* <ul> */}
				<NavList>
					<NavListItems>
						<a href="#aboutme">About Me</a>
					</NavListItems>
					<NavListItems>
						<a href="#projects">Projects</a>
					</NavListItems>
					<NavListItems>
						<a href="#resume">Resume</a>
					</NavListItems>
					<NavListItems>
						<a href="#contact">Contact</a>
					</NavListItems>
				</NavList>
				{/* </ul> */}
			</HeaderCont>
			{/* </Header> */}
		</div>
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
	grid-column: 2 / 4;
`;

const NavList = styled.ul`
	list-style: none;
	grid-column-end: 12;
`;

const NavListItems = styled.li`
	display: inline;
	color: red;
`;
