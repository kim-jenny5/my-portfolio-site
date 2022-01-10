import React from "react";

export default function Projects(props) {
	return (
		<div className="each-project">
			<div className="top">
				<span className="left-side">
					<div className="title-text">
						{props.number} | {props.name}
					</div>
					<div className="description">{props.description}</div>
				</span>
				<span>
					<img src={props.img} className="screenshot"></img>
				</span>
			</div>
			<div className="tech">{props.tech}</div>
			<div className="link-btns">
				{props.githubLink.length === 2 ? (
					<>
						<a href={props.githubLink[0]} target="_blank">
							BACKEND GITHUB
						</a>
						<a href={props.githubLink[1]} target="_blank">
							FRONTEND GITHUB
						</a>
					</>
				) : (
					<a href={props.githubLink} target="_blank">
						GITHUB
					</a>
				)}
				<a href={props.deployedSite} target="_blank">
					SITE
				</a>
				<a href={props.videoDemo} target="_blank">
					VIDEO DEMO
				</a>
			</div>
		</div>
	);
}
