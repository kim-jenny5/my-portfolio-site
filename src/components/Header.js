import { NavLink } from 'react-router-dom';
import Nav from './Nav';

export default function Header({
	style: styleFromProps,
	toggleMenu,
	isMenuOpen
}) {
	return (
		<header
			className={`relative ${styleFromProps} flex justify-end items-center text-obsidian`}
		>
			<NavLink
				to='/'
				className='z-50 absolute -left-10 -bottom-12 -rotate-90 font-poppins font-bold text-center text-2xl text-orion underline underline-offset-2 tracking-[-.075em]'
			>
				jennykim .
			</NavLink>
			<>
				<div
					onClick={toggleMenu}
					className={`cursor-pointer relative z-50 rounded-full py-0.5 px-2 bg-mist italic font-poppins lowercase text-sm ${
						isMenuOpen ? 'pointer-events-none' : ''
					}`}
				>
					Menu
				</div>
				<Nav
					toggleMenu={toggleMenu}
					isMenuOpen={isMenuOpen}
					style={`${
						isMenuOpen
							? 'z-50 opacity-100 translate-y-1/3'
							: 'z-0 opacity-0 pointer-events-none'
					} absolute top-0 -right-2 bg-mist w-[150px] h-fit flex flex-col gap-y-1 items-end font-poppins text-sm shadow-lg p-4 transition duration-700 ease-in-out rounded-md`}
				/>
			</>
		</header>
	);
}
