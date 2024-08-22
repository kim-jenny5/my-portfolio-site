import React from 'react';
import home_profile from '../assets/images/home_profile.jpg';
import profile from '../assets/images/profile.jpg';
import Nav from '../components/Nav';

export default function Home() {
	return (
		<>
			<div className='row-start-1 row-span-2 col-start-1 col-span-8 overflow-hidden'>
				<div className='relative w-full h-full'>
					<img
						src={profile}
						alt='home-profile'
						className='absolute top-0 left-0 w-full h-full object-cover'
						loading='lazy'
					/>
				</div>
			</div>
			<div className='col-start-9 col-span-4 row-start-1 flex flex-col justify-end'>
				<div className='font-bold text-2xl'>Hi, I'm Jenny</div>
				<div>fullstack engineer / nyc 🗽</div>
			</div>
			<div className='row-start-2 col-start-9 col-span-4'>
				<iframe
					style={{ borderRadius: '12px', border: '0' }}
					src='https://open.spotify.com/embed/playlist/4sp8WEHBqmXrS14xdJBpOu?utm_source=generator&theme=0'
					width='100%'
					height='100%'
					allowfullscreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
				></iframe>
			</div>
		</>
	);
}
