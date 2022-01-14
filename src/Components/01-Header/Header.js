import React from "react";
import { HeaderCont } from "./style";
import { Button } from "./style";
// import { ThreeLineHorizontal } from "akar-icons";
// import { HeaderCont } from "./App";

// const handleClick = () => {
// 	window.scrollTo({ top: 0, behavior: "smooth" });
// 	window.location.href = "";
// };

export default function Header() {
	return (
		// <div className="title-text header-nav">
		// <>
		// 	{/* <span className="logo">jennykim.</span> */}
		// 	{/* <Header> */}
		// 	{/* <HeaderCont> */}
		// 	{/* <Button onClick={handleClick}>jennykim.</Button> */}
		// 	{/* <ul> */}
		// 	{/* <NavBar> */}
		// 	{/* <ThreeLineHorizontal strokeWidth={2} size={35} className="mobile" /> */}
		// 	{/* <li className="non-mobile">
		// 			<a href="#aboutme">About Me</a>
		// 		</li>
		// 		<li className="non-mobile">
		// 			<a href="#projects">Projects</a>
		// 		</li>
		// 		<li className="non-mobile">
		// 			<a href="#resume">Resume</a>
		// 		</li>
		// 		<li className="non-mobile">
		// 			<a href="#contact">Contact</a>
		// 		</li> */}
		// 	{/* </NavBar> */}
		// 	{/* </ul> */}
		// 	{/* </HeaderCont> */}
		// 	{/* </Header> */}
		// </>
		// </div>
		<HeaderCont>
			{/* <div>logo</div> */}

			<Button>jennykim.</Button>
			<div>navbar</div>
		</HeaderCont>
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

// const NavListItems = styled.li`
// 	display: inline;
// 	color: red;
// `;
