import React from "react";

export default function Education(props) {
	return (
		<div className="each-education">
			<div>
				<span className="name left">{props.name}</span>
				<span className="right">{props.city}</span>
			</div>
			<div>
				<span className="left">{props.program}</span>
				<span className="right">{props.dates}</span>
			</div>
		</div>
	);
}
