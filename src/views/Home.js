import React from 'react';
import profile from '../assets/images/profile.jpg';

export default function Home() {
	return (
		<>
			<div className='row-start-1 row-span-3 col-start-1 col-span-8 relative w-full h-full overflow-hidden rounded-md'>
				<img
					src={profile}
					alt='woman smiling outside'
					className='absolute top-0 left-0 w-full h-full object-cover'
					loading='lazy'
				/>
			</div>
			<div className='col-start-9 col-span-4 row-start-2 flex flex-col justify-end'>
				<div className='font-bold text-2xl'>Hi, I'm Jenny</div>
				<div>fullstack engineer / nyc 🗽</div>
			</div>
		</>
	);
}
