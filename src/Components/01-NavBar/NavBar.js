import React from "react";
// import { StyledLink } from "./style";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<div>
				<Link to="/" className="uppercase font-medium">
					jenny kim
				</Link>
			</div>
		</nav>
	);
}
