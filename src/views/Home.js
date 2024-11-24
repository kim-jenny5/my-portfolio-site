import React from 'react';
import profile from '../assets/images/profile.jpg';

export default function Home() {
	return (
		<>
			<div className='relative w-full h-full overflow-hidden rounded-md row-start-3 row-span-3 col-start-1 col-span-full desktop:col-span-8 desktop:row-start-1 desktop:row-span-3'>
				<img
					src={profile}
					alt='woman smiling outside'
					className='absolute top-0 left-0 w-full h-full object-cover'
					loading='lazy'
				/>
			</div>
			<div className='flex flex-col justify-end row-start-2 col-start-1 col-span-full desktop:col-start-9 desktop:col-span-4'>
				<div className='font-bold text-2xl'>Hi, I'm Jenny</div>
				<div>frontend engineer / nyc 🗽</div>
			</div>
		</>
	);
}
