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
						<button>BACKEND GITHUB</button>
						<button>FRONTEND GITHUB</button>
					</>
				) : (
					<button>GITHUB</button>
				)}
				<button>SITE</button>
				<button>VIDEO DEMO</button>
			</div>
		</div>
	);
}
