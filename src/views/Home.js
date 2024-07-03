import React from 'react';
import home_profile from '../assets/images/home_profile.jpg';

export default function Home() {
	return (
		// <div className='relative flex justify-center px-12 text-obsidian font-bold tracking-tighter uppercase'>
		// 	<div className='absolute top-0 -translate-y-1/2 z-10 text-5xl md:text-7xl xl:text-8xl'>
		// 		Jenny Kim
		// 	</div>
		// 	<div className='absolute bottom-0 translate-y-1/3 z-10 md:text-5xl xl:text-6xl'>
		// 		Fullstack Engineer
		// 	</div>
		// 	<div className='w-32 h-32 md:w-72 md:h-72 overflow-hidden rounded-full'>
		// 		<img
		// 			src={home_profile}
		// 			alt='home-profile'
		// 			className='w-full h-full object-cover object-right scale-125'
		// 			loading='lazy'
		// 		/>
		// 	</div>
		// </div>
		<div className='w-full h-full grid grid-cols-4 grid-rows-auto gap-y-4'>
			{/* <div className='justify-self-end col-start-4 w-32 h-32 md:w-64 md:h-64 overflow-hidden rounded-full'> */}
			<div className='col-start-1 w-32 h-32 md:w-64 md:h-64 overflow-hidden rounded-lg'>
				<img
					src={home_profile}
					alt='home-profile'
					className='w-full h-full object-cover object-right scale-125'
					loading='lazy'
				/>
			</div>
			<div className='row-start-2 col-start-1 col-span-2 uppercase'>
				<div className='font-medium text-2xl'>Hi, I'm Jenny</div>
				<div className='text-lg'>
					{/* <span className='bg-obsidian px-2 py-1 text-white'> */}
					Fullstack engineer {/* </span>{' '} */}
					based in New York City, US
				</div>
			</div>
		</div>
	);
}
