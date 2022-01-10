import React, { Component } from "react";
import Projects from "./Projects";

export default class ProjectsCont extends Component {
	render() {
		const projects = [
			{
				name: "My Daily Journal",
				description:
					"My Daily Journal is a web app, designed for users to take a pause and reflect on their day and overall mental/emotional wellness. Users can log their mood, details about their day, what they ate, and what they’re grateful for that day.",
				githubLink: "https://github.com/kim-jenny5/journal-sinatra-project",
				deployedSite: "https://mydailyjournal-byjenny.herokuapp.com/",
				videoDemo: "https://youtu.be/gGmy4BkilPI"
			},
			{
				name: "Pilim",
				description:
					"'When Rotten Tomatoes meets Goodreads...' Created for casual movie viewers who want to review and explore similar movies they’ve enjoyed, Pilim (“pill-im”) is a web app where users can create movie lists and review movies all in one place.",
				githubLink: "https://github.com/kim-jenny5/pilim-project",
				deployedSite: "https://pilim-project.herokuapp.com/",
				videoDemo: "https://youtu.be/1CdiE-hHL2U"
			},
			{
				name: "Tableau d'Ambiance",
				description:
					"Tableau d’Ambiance is a single-page application (SPA), where users can create/delete albums and upload photos to store their memories and reminisce.",
				githubLink: [
					"https://github.com/kim-jenny5/tableau-dambiance-backend",
					"https://github.com/kim-jenny5/tableau-dambiance-frontend"
				],
				deployedSite: "https://tableau-dambiance.netlify.app/",
				videoDemo: "https://youtu.be/JCeUpYs0Jlo"
			},
			{
				name: "my travelogue",
				description:
					"my travelogue is a SPA for users to log and track their past/upcoming trips and itineraries. Along with jotting down their itineraries, to further fuel excitement to travelers as they prepare for their trips, users can see a D-day counter for the next immediate upcoming trip.",
				githubLink: [
					"https://github.com/kim-jenny5/my-travelogue-backend",
					"https://github.com/kim-jenny5/my-travelogue-frontend"
				],
				deployedSite: "https://my-travelogue.netlify.app/",
				videoDemo: "https://youtu.be/qy9HIfJedWk"
			}
		];

		return (
			<div id="projects">
				<div className="container">
					<div className="title-text">
						Projects
						<hr></hr>
					</div>
					<div className="project-details">
						{projects.map((project, idx) => (
							<div className="each-project-cont">
								<Projects
									key={idx}
									number={`0${idx + 1}`}
									name={project.name}
									description={project.description}
									githubLink={project.githubLink}
									deployedSite={project.deployedSite}
									videoDemo={project.videoDemo}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
