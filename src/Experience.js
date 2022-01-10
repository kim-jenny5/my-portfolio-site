import React from "react";

export default function Experience(props) {
	return (
		<div className="each-experience">
			<div>
				<span className="name left">{props.name}</span>
				<span className="right">{props.city}</span>
			</div>
			<div>
				<span className="left">{props.position}</span>
				<span className="right">{props.dates}</span>
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
