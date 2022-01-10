import React from "react";
// import animal_crossing_profile from "./images/animal_crossing_profile.png";
import acnh_blob from "./images/acnh_blob.png";

export default function About() {
	return (
		<div id="aboutme">
			<div className="container">
				<div className="top">
					{/* <div className="picture"></div> */}
					<img src={acnh_blob} className="picture"></img>
					<div className="description">
						<div className="title-text">
							About Me
							<hr></hr>
						</div>
						<div className="text">
							<div>
								I’m a 23-year old frontend developer, with a background in
								business and a passion for design, based in the New York
								Metropolitan Area.
							</div>
							<br></br>
							<div>
								Utilizing my skills in organization and time management, I
								create thoughtfully planned out web applications. With an
								interest and tact for design, I have a passion in creating and
								coding aesthetic UIs for an enhanced experience.
							</div>
							<br></br>
							<div>
								I am a great team player, but I also value autonomy. I love to
								listen to music or true crime podcasts as I wireframe and code.
								In my free time, my hobbies are watching TV/movies, crocheting,
								and playing Animal Crossing.
							</div>
						</div>
					</div>
				</div>
				<div id="tech-stack">
					<div id="frontend">
						<div className="title-text">Frontend 🦄</div>
						<div className="body-text">
							JavaScript / HTML / CSS / React / Redux
						</div>
					</div>
					<div id="design">
						<div className="title-text">Design 🎨</div>
						<div className="body-text">Figma / Bootstrap / MUI</div>
					</div>
					<div id="backend">
						<div className="title-text">Backend 🤖</div>
						<div className="body-text">Ruby on Rails / SQLite / PostgreSQL</div>
					</div>
				</div>
			</div>
		</div>
	);
}
