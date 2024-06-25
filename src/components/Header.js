import React from 'react';
import { Link } from 'react-router-dom';
import { useIsHome } from '../hooks/useIsHome';

export default function Header() {
	const isHome = useIsHome();

	return (
		<nav
			className={`w-full p-6 flex flex-col gap-y-2 uppercase ${
				isHome ? 'text-obsidian' : 'text-orion'
			} text-3xl uppercase`}
		>
			{!isHome && (
				<div className='text-center font-semibold'>
					<Link to='/' className='hover:brightness-150'>
						Jenny Kim
					</Link>
				</div>
			)}
			<div className='flex justify-around font-medium text-lg xl:text-2xl'>
				<Link
					to='/about'
					className='px-2 hover:bg-obsidian hover:text-cream active:text-mushroom'
				>
					About
				</Link>
				<Link
					to='/projects'
					className='px-2 hover:bg-obsidian hover:text-cream active:text-mushroom'
				>
					Projects
				</Link>
				<Link
					to='/contact'
					className='px-2 hover:bg-obsidian hover:text-cream active:text-mushroom'
				>
					Contact
				</Link>
			</div>
		</nav>
	);
}
