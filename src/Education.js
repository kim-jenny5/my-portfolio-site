import React from "react";

export default function Education(props) {
	return (
		<div className="each-education">
			<div>
				<span>{props.name}</span>
				<span>{props.city}</span>
			</div>
			<div>
				<span>{props.program}</span>
				<span>{props.dates}</span>
			</div>
		</div>
	);
}
