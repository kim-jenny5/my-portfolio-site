import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import SpotifyPlayer from './components/SpotifyPlayer';

export default function App() {
	const isDesktop = useMediaQuery({ minWidth: 1025 });
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const blurryElements = ['main', 'footer'];

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
		for (const selector of blurryElements) {
			const element = document.querySelector(selector);
			element.style.filter = isMenuOpen ? 'none' : 'blur(8px)';
		}
	};

	return (
		<div className='w-full h-full min-h-screen max-w-screen-desktop mx-auto flex flex-col gap-y-4 p-4 desktop:gap-y-5 desktop:p-5'>
			<Header
				style='max-w-screen-xl w-full h-full max-h-fit desktop:max-h-28'
				toggleMenu={toggleMenu}
				isMenuOpen={isMenuOpen}
			/>
			<main className='relative max-w-screen-xl w-full h-full m-auto grow grid grid-cols-12 grid-rows-6 gap-x-3 gap-y-6 tablet:gap-x-5 tablet:gap-y-10 desktop:grid-rows-3 desktop:gap-x-8 desktop:gap-y-12'>
				{isDesktop && <Nav />}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<SpotifyPlayer style='hidden tabletLandscape:block row-start-3 col-start-9 col-span-4' />
			</main>
			<Footer style='max-w-screen-xl w-full m-auto' />
		</div>
	);
}
