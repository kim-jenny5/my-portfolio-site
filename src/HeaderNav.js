import React from "react";

export default function HeaderNav() {
	return (
		<div className="title-text header-nav">
			<span className="logo">jennykim.</span>
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
