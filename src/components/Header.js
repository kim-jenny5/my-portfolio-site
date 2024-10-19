import React from 'react';
import { NavLink } from 'react-router-dom';
import site_logo from '../assets/images/site_logo.png';

export default function Header({ className }) {
	return (
		<nav
			className={`${className} flex justify-center items-center p-3 tablet:p-5 desktop:px-8 widescreen:px-0 text-obsidian`}
		>
			<NavLink to='/' className='col-start-1 col-span-full hover:text-orion'>
				<img
					src={site_logo}
					alt='home-profile'
					className='w-20 h-20'
					loading='lazy'
				/>
				<div class='lowercase text-center text-sm pt-1'>Jenny Kim</div>
			</NavLink>
		</nav>
	);
}
