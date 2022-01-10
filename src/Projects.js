import React from "react";

export default function Projects(props) {
	return (
		<div className="each-project">
			<div className="title-text">
				{props.number} | {props.name}
			</div>
			<div className="description">{props.description}</div>
			<div className="img-cont">
				{/* <img>{props.img}</img> */}
				{/* {props.img} */}
				<img src={props.img}></img>
			</div>
			<div className="tech">{props.tech}</div>
			<div className="link-btns">
				{props.githubLink.length === 2 ? (
					<>
						<button>
							<a href={props.githubLink[0]} target="_blank">
								BACKEND GITHUB
							</a>
						</button>
						<button>
							<a href={props.githubLink[1]} target="_blank">
								FRONTEND GITHUB
							</a>
						</button>
					</>
				) : (
					<button>
						<a href={props.githubLink} target="_blank">
							GITHUB
						</a>
					</button>
				)}
				<button>
					<a href={props.deployedSite} target="_blank">
						SITE
					</a>
				</button>
				<button>
					<a href={props.videoDemo} target="_blank">
						VIDEO DEMO
					</a>
				</button>
			</div>
		</div>
	);
}
