import React from "react";

export default function Projects(props) {
	return (
		<div className="each-project">
			<div className="title-text">
				{props.number} | {props.name}
			</div>
			<div className="description">{props.description}</div>
			<div className="tech">{props.tech}</div>
			<div className="link-btns">
				{props.githubLink.length === 2 ? (
					<>
						<button>
							<a href={props.githubLink[0]}>BACKEND GITHUB</a>
						</button>
						<button>
							<a href={props.githubLink[1]}>FRONTEND GITHUB</a>
						</button>
					</>
				) : (
					<button>
						<a href={props.githubLink}>GITHUB</a>
					</button>
				)}
				<button>
					<a href={props.deployedSite}>SITE</a>
				</button>
				<button>
					<a href={props.videoDemo}>VIDEO DEMO</a>
				</button>
			</div>
		</div>
	);
}
