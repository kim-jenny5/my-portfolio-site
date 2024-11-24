import React from 'react';
import { NavLink } from 'react-router-dom';
import { X as CloseBtn } from 'react-feather';

export default function MobileNav({ toggleMenu }) {
	return (
		<div className='z-50 fixed top-0 right-0 bg-cloud w-2/3 h-full flex flex-col shadow-xl border-l border-orion p-4 animate-[4s_linear_1s_slide-in]'>
			<CloseBtn onClick={toggleMenu} size={20} className='self-end' />
			<NavLink to='/'>
				<div>home</div>
			</NavLink>
			<NavLink to='/about'>
				<div>about</div>
			</NavLink>
			<NavLink to='/contact'>
				<div>contact</div>
			</NavLink>
		</div>
	);
}
