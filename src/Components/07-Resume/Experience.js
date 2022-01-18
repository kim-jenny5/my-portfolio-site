import React from "react";
import { ExperienceCont, ResumeDetail, Title } from "./style";

export default function Experience(props) {
	const { name, description, position, city, dates } = props.experience;

	return (
		<>
			<ResumeDetail>
				<span>
					<b>{name}</b>
				</span>
				<span>{city}</span>
			</ResumeDetail>
			<ResumeDetail>
				<span>{position}</span>
				<span>{dates}</span>
			</ResumeDetail>
			<ul>
				{description.map((desc, idx) => (
					<li key={idx}>{desc}</li>
				))}
			</ul>
		</>
	);
}
