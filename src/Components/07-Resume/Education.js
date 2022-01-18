import React from "react";
import { EducationCont, ResumeDetail } from "./style";

export default function Education(props) {
	const { name, program, city, dates } = props.education;

	return (
		<>
			<ResumeDetail>
				<span>
					<b>{name}</b>
				</span>
				<span>{city}</span>
			</ResumeDetail>
			<ResumeDetail>
				<span>{program}</span>
				<span>{dates}</span>
			</ResumeDetail>
		</>
	);
}
