import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
	return (
		<div id="projects">
			<div className="container">
				<div className="title-text">
					Projects
					<hr></hr>
				</div>
				<div>
					<ProjectCard />
				</div>
			</div>
		</div>
	);
}
