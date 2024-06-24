import React from "react";
import { EachEducation } from "./style";
import MediaQuery from "react-responsive";

export default function Education(props) {
	const { name, program, city, dates } = props.education;

	return (
		<EachEducation className="each-education">
			<MediaQuery maxWidth={479}>
				<div>
					<b>{name}</b>
				</div>
				<div className="city-dates">
					<span>{city}</span>
					<span className="dates">{dates}</span>
				</div>
				<div>
					<em>{program}</em>
				</div>
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
						<em>{program}</em>
					</span>
					<span className="dates">{dates}</span>
				</div>
			</MediaQuery>
		</EachEducation>
	);
}
