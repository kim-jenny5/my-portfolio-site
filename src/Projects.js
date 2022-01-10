import React from "react";

export default function Projects(props) {
	return (
		<div className="each-project container">
			<div className="title-text">
				0{props.number} | {props.name}
			</div>
		</div>
	);
}
