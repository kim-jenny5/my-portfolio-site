import React from "react";
import { EachProjCont, ProjectCont } from "./style";
import daily_journal from "../../media/screenshots/01_my_daily_journal.png";
import pilim from "../../media/screenshots/02_pilim.png";
import tableau_dambiance from "../../media/screenshots/03_tableau_dambiance.png";
import my_travelogue from "../../media/screenshots/04_my_travelogue.png";

const projects = [
	{
		name: "My Daily Journal",
		description:
			"My Daily Journal is a web app, designed for users to take a pause and reflect on their day and overall mental/emotional wellness. Users can log their mood, details about their day, what they ate, and what they’re grateful for that day.",
		tech: "Ruby / Sinatra / ActiveRecord / SQLite / PostgreSQL / HTML / CSS",
		githubLink: "https://github.com/kim-jenny5/journal-sinatra-project",
		deployedSite: "https://mydailyjournal-byjenny.herokuapp.com/",
		videoDemo: "https://youtu.be/gGmy4BkilPI",
		img: daily_journal
	},
	{
		name: "Pilim",
		description: `"When Rotten Tomatoes meets Goodreads..." Created for casual movie viewers who want to review and explore similar movies they’ve enjoyed, Pilim (“pill-im”) is a web app where users can create movie lists and review movies all in one place.`,
		tech: "Ruby on Rails / ActiveRecord / SQLite / PostgreSQL / HTML / CSS / Bootstrap / OmniAuth",
		githubLink: "https://github.com/kim-jenny5/pilim-project",
		deployedSite: "https://pilim-project.herokuapp.com/",
		videoDemo: "https://youtu.be/1CdiE-hHL2U",
		img: pilim
	},
	{
		name: "Tableau d'Ambiance",
		description:
			"Tableau d’Ambiance is a single-page application (SPA), where users can create/delete albums and upload photos to store their memories and reminisce.",
		tech: "Rails API / ActiveRecord / PostgreSQL / Active Model Serializers / JavaScript / HTML / CSS / Bootstrap / Active Storage / Amazon AWS S3",
		githubLink: [
			"https://github.com/kim-jenny5/tableau-dambiance-backend",
			"https://github.com/kim-jenny5/tableau-dambiance-frontend"
		],
		deployedSite: "https://tableau-dambiance.netlify.app/",
		videoDemo: "https://youtu.be/JCeUpYs0Jlo",
		img: tableau_dambiance
	},
	{
		name: "my travelogue",
		description:
			"my travelogue is a SPA for users to log and track their past/upcoming trips and itineraries. Along with jotting down their itineraries, to further fuel excitement to travelers as they prepare for their trips, users can see a D-day counter for the next immediate upcoming trip.",

		tech: "Rails API / ActiveRecord / PostgreSQL / Active Model Serializers / JavaScript / React / Redux / HTML / CSS / MUI / date-fns",
		githubLink: [
			"https://github.com/kim-jenny5/my-travelogue-backend",
			"https://github.com/kim-jenny5/my-travelogue-frontend"
		],
		deployedSite: "https://my-travelogue.netlify.app/",
		videoDemo: "https://youtu.be/qy9HIfJedWk",
		img: my_travelogue
	}
];

export default function Project() {
	return (
		<ProjectCont>
			<div>Projects</div>
			<EachProjCont>
				{projects.map((project, idx) => (
					<div>
						{/* // 	<Projects
					// 		key={idx}
					// 		number={`0${idx + 1}`}
					// 		name={project.name}
					// 		description={project.description}
					// 		tech={project.tech}
					// 		githubLink={project.githubLink}
					// 		deployedSite={project.deployedSite}
					// 		videoDemo={project.videoDemo}
					// 		img={project.img}
					// 	/> */}
					</div>
				))}
			</EachProjCont>
		</ProjectCont>
	);
}
