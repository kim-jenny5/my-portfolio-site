import React from "react";

export default function About() {
	return (
		<div id="aboutme">
			<div className="container">
				<div className="container-2">
					<div className="picture"></div>
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
				<div className="tech-stack"></div>
			</div>
		</div>
	);
}
