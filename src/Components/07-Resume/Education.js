import React from "react";
import { EducationCont } from "./style";

export default function Education(props) {
	const { name, program, city, dates } = props.education;

	return (
		<>
			<div>
				<span>
					<b>{name}</b>
				</span>
				<span>{city}</span>
			</div>
			<div>
				<span>{program}</span>
				<span>{dates}</span>
			</div>
		</>
	);
}
