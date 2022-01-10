import React from "react";

export default function Projects(props) {
	return (
		<div className="each-project">
			<div className="title-text">
				{props.number} | {props.name}
			</div>
			<div className="description">{props.description}</div>
			<div className="tech">{props.tech}</div>
		</div>
	);
}
