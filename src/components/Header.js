import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { useIsHome } from '../hooks/useIsHome';
import { Home } from 'react-feather';

export default function Header() {
	// const isHome = useIsHome();

	return (
		<nav
			className={`w-full py-6 flex flex-col gap-y-2 uppercase text-obsidian text-3xl uppercase`}
		>
			<div className='grid grid-cols-3 font-medium text-lg xl:text-2xl'>
				<NavLink
					to='/'
					// className='justify-self-center w-min px-2 active:text-mushroom'
					className={({ isActive }) =>
						`justify-self-center w-min px-2 active:text-mushroom ${
							isActive ? 'underline' : 'hover:bg-obsidian hover:text-cream'
						}`
					}
				>
					{/* <Home /> */}
					Home
				</NavLink>
				<NavLink
					to='/about'
					className='justify-self-center w-min px-2 hover:bg-obsidian hover:text-cream active:text-mushroom'
				>
					About
				</NavLink>
				<NavLink
					to='/contact'
					className='justify-self-center w-min px-2 hover:bg-obsidian hover:text-cream active:text-mushroom'
				>
					Contact
				</NavLink>
			</div>
		</nav>
	);
}
