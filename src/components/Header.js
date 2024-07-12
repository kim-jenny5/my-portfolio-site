import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';
// import { useIsHome } from '../hooks/useIsHome';
// import { Home } from 'react-feather';

export default function Header() {
	// const isHome = useIsHome();

	return (
		<nav
			// className={`w-full py-6 flex flex-col gap-y-2 text-obsidian text-3xl uppercase`}
			className={`flex justify-between items-center p-3 tablet:p-5 desktop:px-8 widescreen:px-0 font-poppins text-obsidian tracking-tight`}
			// className={`flex justify-between items-center p-3 tablet:p-5 desktop:px-8 widescreen:px-0 text-obsidian tracking-tight`}
			// className={`flex justify-between items-center py-4 text-obsidian`}
		>
			{/* <NavLink to='/' className='active:text-mushroom'> */}
			<NavLink
				to='/'
				className='uppercase text-xl tablet:text-2xl desktop:text-3xl'
			>
				Jenny Kim
			</NavLink>
			<div className='flex gap-x-8 desktop:text-lg'>
				<Nav />
			</div>
		</nav>
	);
}
