import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className='flex justify-between items-center p-5'>
			<div>
				<Link
					to='/'
					className='inline-block uppercase font-medium text-orion text-5xl'
				>
					Jenny Kim
				</Link>
				<div className='inline-block rounded-full w-3 h-3 bg-obsidian ml-1'></div>
			</div>
			<div className='flex gap-x-3'>
				<Link to='/' className='uppercase font-medium text-orion text-xl'>
					About
				</Link>
				<Link to='/' className='uppercase font-medium text-orion text-xl'>
					Projects
				</Link>
				<Link to='/' className='uppercase font-medium text-orion text-xl'>
					Contact
				</Link>
			</div>
		</nav>
	);
}
