import React from "react";
import { TopCont, ProjectName, BtmCont, ImgCont } from "./style";

export default function EachProject(props) {
	const { name, description, tech, githubLink, deployedSite, videoDemo, img } =
		props.project;

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
							<a href={githubLink[0]} target="_blank">
								BACKEND GITHUB
							</a>
							<a href={githubLink[1]} target="_blank">
								FRONTEND GITHUB
							</a>
						</>
					) : (
						<a href={githubLink} target="_blank">
							GITHUB
						</a>
					)}
					<a href={deployedSite}>SITE</a>
					<a href={videoDemo}>VIDEO DEMO</a>
				</div>
			</BtmCont>
		</>
	);
}
