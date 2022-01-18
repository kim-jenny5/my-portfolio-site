import React from "react";
import { ExperienceCont, ResumeDetail, Title } from "./style";
import MediaQuery from "react-responsive";

export default function Experience(props) {
	const { name, description, position, city, dates } = props.experience;

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
				<ResumeDetail>{position}</ResumeDetail>
				<ul>
					{description.map((desc, idx) => (
						<li key={idx}>{desc}</li>
					))}
				</ul>
			</MediaQuery>
			<MediaQuery minWidth={480}>
				<ResumeDetail>
					<div>
						<b>{name}</b>
					</div>
					<div>{city}</div>
				</ResumeDetail>
				<ResumeDetail>
					<div>{position}</div>
					<div>{dates}</div>
				</ResumeDetail>
				<ul>
					{description.map((desc, idx) => (
						<li key={idx}>{desc}</li>
					))}
				</ul>
			</MediaQuery>
		</>
	);
}
