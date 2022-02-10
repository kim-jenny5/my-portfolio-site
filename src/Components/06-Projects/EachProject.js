import React from "react";
import { TopCont, ProjectName, BtmCont, ImgCont } from "./style";

export default function EachProject(props) {
	const {
		name,
		description,
		tech,
		githubLink,
		deployedSite,
		videoDemo,
		img,
		wireframes,
		userScenarios
	} = props.project;

	const number = props.number;

	return (
		<>
			<TopCont>
				<div>
					<ProjectName>
						{number} | {name}
					</ProjectName>
					<div>{description}</div>
				</div>
				<ImgCont src={img} />
			</TopCont>
			<BtmCont>
				<div>{tech}</div>
				<div>
					{githubLink.length === 2 ? (
						<>
							<a href={githubLink[0]} target="_blank" rel="noreferrer">
								BACKEND GITHUB
							</a>
							<a href={githubLink[1]} target="_blank" rel="noreferrer">
								FRONTEND GITHUB
							</a>
						</>
					) : (
						<a href={githubLink} target="_blank" rel="noreferrer">
							GITHUB
						</a>
					)}
					<a href={deployedSite} target="_blank" rel="noreferrer">
						SITE
					</a>
					<a href={videoDemo} target="_blank" rel="noreferrer" s>
						VIDEO DEMO
					</a>
					{userScenarios ? (
						<a href={userScenarios} target="_blank" rel="noreferrer">
							USER STORY
						</a>
					) : null}
					{wireframes ? (
						<a href={wireframes} target="_blank" rel="noreferrer">
							WIREFRAMES
						</a>
					) : null}
				</div>
			</BtmCont>
		</>
	);
}
