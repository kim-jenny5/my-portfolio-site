import React from 'react';
import home_profile from '../assets/images/home_profile.jpg';
import Nav from '../components/Nav';
// import cat from '../assets/images/cat.jpg';

export default function Home() {
	return (
		<>
			{/* <div className='col-start-1 col-span-8 w-full aspect-[4/3] overflow-hidden rounded'> */}
			{/* <div className='col-start-1 col-span-8 overflow-hidden rounded'> */}
			<div className='col-start-1 col-span-8 overflow-hidden'>
				<div className='relative w-full h-full'>
					<img
						src={home_profile}
						alt='home-profile'
						className='absolute top-0 left-0 w-full h-full object-cover'
						loading='lazy'
					/>
				</div>
			</div>
			{/* <div className='col-start-10 col-span-2 row-start-1 w-full aspect-[4/3] overflow-hidden rounded'>
				<img src={cat} alt='cat' className='w-full h-full object-cover' />
			</div> */}
			<div className='col-start-9 col-span-4 grid grid-rows-[min-content 1fr] grid-cols-1'>
				<Nav />
				<div className='flex flex-col justify-center'>
					<div className='font-bold text-2xl'>Hi, I'm Jenny</div>
					<div className='text-lg'>
						Fullstack engineer based in New York City, US
					</div>
				</div>
			</div>
		</>
	);
}
