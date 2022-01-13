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
				<ul>
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
				</ul>
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
