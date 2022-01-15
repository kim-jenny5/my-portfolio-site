import React from "react";
import { AboutCont, TopCont, AcnhBlob, TechStack } from "./style";
import acnhblob from "../../media/acnh_blob.png";

export default function About() {
	return (
		<AboutCont>
			<TopCont>
				<div>About Me</div>
				<div>
					<AcnhBlob src={acnhblob} />
					<div>
						<div>
							I’m a 23-year old frontend developer, with a background in
							business and a passion for design, based in the New York
							Metropolitan Area.
						</div>
						<div>
							Utilizing my skills in organization and time management, I create
							thoughtfully planned out web applications. With an interest and
							tact for design, I have a passion in creating and coding aesthetic
							UIs for an enhanced experience.
						</div>
						<div>
							I am a great team player, but I also value autonomy. I love to
							listen to music or true crime podcasts as I wireframe and code. In
							my free time, my hobbies are watching TV/movies, crocheting, and
							playing Animal Crossing.
						</div>
					</div>
				</div>
			</TopCont>
			<TechStack>
				<span>
					<div>Frontend</div>
					<div>JavaScript / HTML / CSS / React / Redux</div>
				</span>
				<span>
					<div>Design</div>
					<div>Figma / Bootstrap / MUI</div>
				</span>
				<span>
					<div>Backend</div>
					<div>Ruby on Rails / SQLite / PostgreSQL</div>
				</span>
			</TechStack>
		</AboutCont>
	);
}
