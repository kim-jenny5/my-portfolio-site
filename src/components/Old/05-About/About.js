import React from 'react';
import { AboutCont, TopCont, AcnhBlob, TextCont, TechStack } from './style';
import acnhblob from '../../media/acnh_blob.png';

export default function About() {
	return (
		<AboutCont id='aboutme'>
			<TopCont>
				<AcnhBlob src={acnhblob} />
				<TextCont>
					<div className='section-title'>About Me</div>
					<ul>
						<li>
							frontend I am a developer, with a background in business and a
							passion for design, based in the New York Metropolitan Area.
						</li>
						<li>
							Utilizing my skills in organization and time management, I create
							thoughtfully planned out web applications. With an interest and
							tact for design, I have a passion in creating and coding aesthetic
							UIs for an enhanced experience.
						</li>
						<li>
							I am a great team player, but I also value autonomy. I love to
							listen to music or true crime podcasts as I wireframe and code. In
							my free time, my hobbies are watching TV/movies, crocheting, and
							playing Animal Crossing. 🌱
						</li>
					</ul>
				</TextCont>
			</TopCont>
			<TechStack>
				<span>
					<div>Frontend 🦄</div>
					<div>JavaScript / React / Redux / HTML / CSS </div>
				</span>
				<span>
					<div>Design 🎨</div>
					<div>Figma / Bootstrap / MUI / styled-components </div>
				</span>
				<span>
					<div>Backend 🤖</div>
					<div>Ruby on Rails / SQLite / PostgreSQL</div>
				</span>
			</TechStack>
		</AboutCont>
	);
}
