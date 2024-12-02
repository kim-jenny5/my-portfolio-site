import React from 'react';
import { useImageLoader } from '../utils/useImageLoader';
import profile from '../assets/images/about_profile.jpg';
import cat from '../assets/images/cat.jpg';

export default function About() {
	const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

	return (
		<>
			<div className='row-start-1 row-span-full col-start-1 col-span-5 flex flex-col gap-y-4 justify-center'>
				<div>
					I'm a fullstack engineer, with a focus in frontend, based in New York
					City. With an interest and tact for design, I have a passion for
					creating and maintaining aesthetic UIs for an enhanced, pleasing
					experience. In my free time, I love to explore the city and its
					numerous "hidden gems" with my friends, crochet, and watch TV/movies
					as I cuddle with my cat, Kiyo&ndash;the cutest cat alive, objectively.
				</div>
				<div>
					<div className='uppercase font-bold text-sm tracking-wide'>
						Frontend
					</div>
					<div>
						HTML / CSS / JavaScript / TypeScript / React / Redux / Hotwire
						Stimulus
					</div>
				</div>
				<div>
					<div className='uppercase font-bold text-sm tracking-wide'>
						Backend
					</div>
					<div>Ruby on Rails / PostgreSQL / SQLite</div>
				</div>
				<div>
					<div className='uppercase font-bold text-sm tracking-wide'>
						Design
					</div>
					<div>
						Tailwind CSS / styled-components / Bootstrap / Material UI / Figma
					</div>
				</div>
			</div>
			<div className='row-start-1 row-span-2 col-start-7 col-span-5 relative w-full h-full overflow-hidden rounded-md'>
				{renderPlaceholder('about-profile')}
				<img
					src={profile}
					alt='woman smiling in front of a green wall'
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
						isLoading('about-profile') ? 'opacity-0' : 'opacity-100'
					}`}
					loading='lazy'
					onLoad={() => handleImageLoad('about-profile')}
				/>
			</div>
			<div className='row-start-3 col-start-6 col-span-3 relative w-full h-full overflow-hidden rounded-md -mt-3 tablet:-mt-5 desktop:-mt-6'>
				{renderPlaceholder('cat')}
				<img
					src={cat}
					alt='cute cat looking up'
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
						isLoading('cat') ? 'opacity-0' : 'opacity-100'
					}`}
					loading='lazy'
					onLoad={() => handleImageLoad('cat')}
				/>
			</div>
		</>
	);
}
