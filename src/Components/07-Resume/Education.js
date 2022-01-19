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
					<span>{dates}</span>
				</div>
				<div>{program}</div>
			</MediaQuery>
			<MediaQuery minWidth={480}>
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
			</MediaQuery>
		</EachEducation>
	);
}
