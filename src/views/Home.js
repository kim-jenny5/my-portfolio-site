import React from 'react';
import home_profile from '../assets/images/home_profile.jpg';
import Nav from '../components/Nav';

export default function Home() {
	return (
		<>
			<div className='row-start-1 row-span-2 col-start-1 col-span-8 overflow-hidden'>
				<div className='relative w-full h-full'>
					<img
						src={home_profile}
						alt='home-profile'
						className='absolute top-0 left-0 w-full h-full object-cover'
						loading='lazy'
					/>
				</div>
			</div>
			<div className='col-start-9 col-span-4 row-start-2 flex flex-col justify-start'>
				<div className='font-bold text-2xl'>Hi, I'm Jenny</div>
				<div>fullstack engineer / nyc 🗽</div>
			</div>
		</>
	);
}
