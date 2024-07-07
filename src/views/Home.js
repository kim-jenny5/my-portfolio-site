import React from 'react';
import home_profile from '../assets/images/home_profile.jpg';

export default function Home() {
	return (
		<>
			<div className='col-start-2 col-span-4 row-start-2 w-full aspect-[4/3] overflow-hidden rounded'>
				<img
					src={home_profile}
					alt='home-profile'
					className='w-full h-full object-cover'
					loading='lazy'
				/>
			</div>
			<div className='col-start-3 col-span-full row-start-3 uppercase'>
				<div className='font-medium text-2xl'>Hi, I'm Jenny</div>
				<div className='text-lg'>
					Fullstack engineer based in New York City, US
				</div>
			</div>
		</>
	);
}
