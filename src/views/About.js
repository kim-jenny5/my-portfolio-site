import React from 'react';
import about_profile from '../assets/images/about_profile.jpg';
import cat from '../assets/images/cat.jpg';

export default function About() {
	return (
		<>
			<div className='row-start-1 row-span-full col-start-1 col-span-5 flex flex-col gap-y-4 justify-center'>
				<div>
					I'm a <span className='italic'>fullstack engineer</span>, with a focus
					in frontend, based in <span className='italic'>New York City</span>.
					With an interest and tact for design, I have a passion for creating
					and maintaining aesthetic UIs for an enhanced, pleasing experience. In
					my free time, I love to explore the city and its numerous "hidden
					gems" with my friends, crochet, and watch TV/movies as I cuddle with
					my cat, Kiyo&ndash;the cutest cat alive, objectively.
				</div>
				<div>
					<div className='uppercase font-bold italic text-sm'>Frontend</div>
					<div>
						HTML / CSS / JavaScript / TypeScript / React / Redux / Hotwire
						Stimulus
					</div>
				</div>
				<div>
					<div className='uppercase font-bold italic text-sm'>Backend</div>
					<div>Ruby on Rails / PostgreSQL / SQLite</div>
				</div>
				<div>
					<div className='uppercase font-bold italic text-sm'>Design</div>
					<div>
						Tailwind CSS / styled-components / Bootstrap / Material UI / Figma
					</div>
				</div>
			</div>
			<div className='row-start-1 row-span-2 col-start-7 col-span-5 relative w-full h-full overflow-hidden rounded-md'>
				<img
					src={about_profile}
					alt='woman smiling in front of a green wall'
					className='absolute top-0 left-0 w-full h-full object-cover transform scale-125'
					loading='lazy'
				/>
			</div>
			<div className='row-start-3 col-start-6 col-span-3 relative w-full h-full overflow-hidden rounded-md -mt-3 tablet:-mt-5 desktop:-mt-6'>
				<img
					src={cat}
					alt='cute cat looking up'
					loading='lazy'
					className='absolute top-0 left-0 w-full h-full object-cover'
				/>
			</div>
		</>
	);
}
