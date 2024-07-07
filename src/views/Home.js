import React from 'react';
import home_profile from '../assets/images/home_profile.jpg';

export default function Home() {
	return (
		<div className='w-full h-full grid grid-cols-6 grid-rows-2'>
			{/* <div className='row-start-2 col-span-full aspect-[4/3] w-2/5 overflow-hidden rounded'> */}
			<div className='row-start-2 col-start-2 col-span-2 aspect-[4/3] overflow-hidden rounded'>
				{/* <div className='justify-self-end col-start-4 w-32 h-32 md:w-64 md:h-64 overflow-hidden rounded-full'> */}
				{/* <div className='col-start-3 col-span-3 w-full h-full overflow-hidden rounded'> */}
				<img
					src={home_profile}
					alt='home-profile'
					className='w-full h-full object-cover'
					// className='w-full h-full object-cover object-right scale-125'
					loading='lazy'
				/>
			</div>
			<div className='row-start-3 uppercase'>
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
