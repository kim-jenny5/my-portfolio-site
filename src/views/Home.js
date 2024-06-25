import React from 'react';
import profile from '../assets/images/profile.jpg';

export default function Home() {
	return (
		<div className='relative flex justify-center px-12 text-obsidian font-bold tracking-tighter uppercase'>
			<div className='absolute top-0 -translate-y-1/2 z-10 text-5xl md:text-7xl xl:text-8xl'>
				Jenny Kim
			</div>
			<div className='absolute bottom-0 translate-y-1/3 z-10 md:text-5xl xl:text-6xl'>
				Fullstack Engineer
			</div>
			<div className='w-32 h-32 md:w-72 md:h-72 overflow-hidden rounded-full'>
				<img
					src={profile}
					alt='profile'
					className='w-full h-full object-cover object-right scale-125'
					loading='lazy'
				/>
			</div>
		</div>
	);
}
