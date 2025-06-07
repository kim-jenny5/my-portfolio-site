import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';
import SpotifyPlayer from './components/SpotifyPlayer';

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
	const location = useLocation();
	const showSpotifyPlayer =
		location.pathname === '/' || location.pathname === '/about';

	return (
		<div className='w-full h-full min-h-screen max-w-screen-desktop mx-auto flex flex-col gap-y-4 p-4 desktop:gap-y-5 desktop:p-5'>
			<Header
				style='max-w-screen-xl w-full h-full max-h-fit desktop:max-h-28'
				toggleMenu={toggleMenu}
				isMenuOpen={isMenuOpen}
			/>
			<main className='relative max-w-screen-xl w-full h-full m-auto grow grid grid-cols-12 grid-rows-12 gap-x-3 gap-y-6 tablet:gap-x-5 tablet:gap-y-10 desktop:gap-x-8 desktop:gap-y-12'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
				{showSpotifyPlayer && (
					<SpotifyPlayer style='hidden tabletLandscape:block tabletLandscape:row-start-8 tabletLandscape:row-span-4 tabletLandscape:col-start-1 tabletLandscape:col-span-4' />
				)}
			</main>
			<Footer style='max-w-screen-xl w-full m-auto' />
		</div>
	);
}
