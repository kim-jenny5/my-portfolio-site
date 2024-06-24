import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<nav className='flex justify-between items-center p-6'>
			<div>
				<Link
					to='/'
					className='inline-block uppercase font-medium text-orion text-5xl hover:brightness-150'
				>
					Jenny Kim
				</Link>
				<div className='inline-block rounded-full w-2 h-2 bg-obsidian ml-1'></div>
			</div>
			<div className='flex gap-x-6'>
				<Link
					to='/about'
					className='uppercase font-medium text-orion text-xl hover:brightness-150'
				>
					About
				</Link>
				<Link
					to='/projects'
					className='uppercase font-medium text-orion text-xl hover:brightness-150'
				>
					Projects
				</Link>
				<Link
					to='/contact'
					className='uppercase font-medium text-orion text-xl hover:brightness-150'
				>
					Contact
				</Link>
			</div>
		</nav>
	);
}
