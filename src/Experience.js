import React from "react";

export default function Experience(props) {
	return (
		<div className="each-experience">
			<div>
				<span>{props.name}</span>
				<span>{props.city}</span>
			</div>
			<div>
				<span>{props.position}</span>
				<span>{props.dates}</span>
			</div>
			<div>
				<ul>
					{props.description.map((desc) => (
						<li>{desc}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
