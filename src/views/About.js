import React from 'react';
import about_profile from '../assets/images/about_profile.jpg';

export default function About() {
	return (
		<div className='flex px-12'>
			<div className='flex flex-col'>
				<img
					src={about_profile}
					alt='about-profile'
					className='w-32 h-32 md:w-72 md:h-72 grow'
					loading='lazy'
				/>
				<div>details here</div>
			</div>
			<div className='flex'>
				I am a frontend developer, with a background in business and a passion
				for design, based in the New York Metropolitan Area. Utilizing my skills
				in organization and time management, I create thoughtfully planned out
				web applications. With an interest and tact for design, I have a passion
				in creating and coding aesthetic UIs for an enhanced experience. I am a
				great team player, but I also value autonomy. I love to listen to music
				or true crime podcasts as I wireframe and code. In my free time, my
				hobbies are watching TV/movies, crocheting, and playing Animal Crossing.
				🌱
			</div>
		</div>
	);
}
