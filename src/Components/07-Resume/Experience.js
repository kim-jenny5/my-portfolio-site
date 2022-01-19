import React from "react";
import { ExperienceCont, EachExperience, Title } from "./style";
import MediaQuery from "react-responsive";

export default function Experience(props) {
	const { name, description, position, city, dates } = props.experience;

	return (
		<EachExperience className="each-experience">
			<MediaQuery maxWidth={479}>
				<div>
					<b>{name}</b>
				</div>
				<div className="city-dates">
					<span>{city}</span>
					<span className="dates">{dates}</span>
				</div>
				<div>
					<em>{position}</em>
				</div>
				<ul>
					{description.map((desc, idx) => (
						<li key={idx}>{desc}</li>
					))}
				</ul>
			</MediaQuery>
			<MediaQuery minWidth={480}>
				<div>
					<span>
						<b>{name}</b>
					</span>
					<span>{city}</span>
				</div>
				<div>
					<span>
						<em>{position}</em>
					</span>
					<span className="dates">{dates}</span>
				</div>
				<ul>
					{description.map((desc, idx) => (
						<li key={idx}>{desc}</li>
					))}
				</ul>
			</MediaQuery>
		</EachExperience>
	);
}
