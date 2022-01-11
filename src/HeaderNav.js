import React from "react";

const handleClick = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function HeaderNav() {
	return (
		<div className="title-text header-nav">
			{/* <span className="logo">jennykim.</span> */}
			<button className="logo" onClick={handleClick}>
				jennykim.
			</button>
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
		</div>
	);
}
