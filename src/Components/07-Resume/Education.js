import React from "react";
import { EducationCont, ResumeDetail } from "./style";
import MediaQuery from "react-responsive";

export default function Education(props) {
	const { name, program, city, dates } = props.education;

	return (
		<>
			<MediaQuery maxWidth={479}>
				<ResumeDetail>
					<b>{name}</b>
				</ResumeDetail>
				<ResumeDetail>
					<span>{city}</span>
					<span>{dates}</span>
				</ResumeDetail>
				<ResumeDetail>{program}</ResumeDetail>
				{/* <ResumeDetail>{dates}</ResumeDetail> */}
			</MediaQuery>
			<MediaQuery minWidth={480}>
				<ResumeDetail>
					<div>
						<b>{name}</b>
					</div>
					<div>{city}</div>
				</ResumeDetail>
				<ResumeDetail>
					<div>{program}</div>
					<div>{dates}</div>
				</ResumeDetail>
			</MediaQuery>
		</>
	);
}
