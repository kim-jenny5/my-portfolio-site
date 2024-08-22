import React from 'react';
import about_profile from '../assets/images/about_profile.jpg';
import home_profile from '../assets/images/home_profile.jpg';
import profile from '../assets/images/profile.jpg';
import cat from '../assets/images/cat.jpg';

export default function About() {
	return (
		<>
			{/* <div className='flex flex-col'>
				<img
					src={about_profile}
					alt='about-profile'
					className='w-32 h-32 md:w-72 md:h-72 grow'
					loading='lazy'
				/>
				<div>details here</div>
			</div> */}
			<div className='row-start-2 col-start-1 col-span-5 flex flex-col gap-y-4 justify-end items-start'>
				{/* I am a frontend developer, with a background in business and a passion
				for design, based in the New York Metropolitan Area. Utilizing my skills
				in organization and time management, I create thoughtfully planned out
				web applications. With an interest and tact for design, I have a passion
				in creating and coding aesthetic UIs for an enhanced experience. I am a
				great team player, but I also value autonomy. I love to listen to music
				or true crime podcasts as I wireframe and code. In my free time, my
				hobbies are watching TV/movies, crocheting, and playing Animal Crossing.
				🌱 */}
				<div>
					I'm a fullstack engineer, with a focus in frontend, based in New York
					City. With an interest and tact for design, I have a passion for
					creating and maintaining aesthetic UIs for an enhanced, pleasing
					experience. In my free time, I love to explore the city and its
					numerous "hidden gems" with my friends, crochet, and watch TV/movies
					as I cuddle with my cat, Kiyo, who is objectively the cutest cat
					alive.
				</div>
				<div className='flex flex-col'>
					<div>bite-sized facts:</div>
					<div className='flex flex-col gap-x-2'>
						<div>mbti? estj</div>
						<div>zodiac? taurus</div>
						<div>chinese zodiac? tiger</div>
						<div>apple or android? apple</div>
						<div>coffee or tea? coffee</div>
						<div>dogs or cats? both</div>
						<div>fave szn? fall</div>
					</div>
				</div>
			</div>
			{/* <div className='row-start-1 col-start-1 col-span-8'> */}
			<div className='row-start-1 col-start-8 col-span-4'>
				<iframe
					src='https://open.spotify.com/embed/playlist/41YR7N5B4xCiTtNxboE03k?utm_source=generator&theme=0'
					width='100%'
					height='100%'
					allowfullscreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
				></iframe>
			</div>
			<div className='row-start-2 col-start-8 col-span-4 relative w-full h-full overflow-hidden'>
				<img
					// src={about_profile}
					// src={profile}
					src={home_profile}
					alt='about-profile'
					className='absolute top-0 left-0 w-full h-full object-cover transform scale-125'
					loading='lazy'
				/>
			</div>
		</>
	);
}
