import React from "react";
import { EducationCont } from "./style";

export default function Education(props) {
	const { name, program, city, dates } = props.education;

	return (
		<EducationCont>
			{name}
			{program}
			{city}
			{dates}
		</EducationCont>
	);
}
