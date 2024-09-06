import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

export default function App() {
	const [mainHeight, setMainHeight] = useState('auto');
	const header = useRef(null);
	const footer = useRef(null);

	useEffect(() => {
		const updateMainHeight = () => {
			const headerHeight = header.current?.offsetHeight || 0;
			const footerHeight = footer.current?.offsetHeight || 0;
			const newMainHeight = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;
			setMainHeight(newMainHeight);
		};

		updateMainHeight();
		window.addEventListener('resize', updateMainHeight);

		return () => {
			window.removeEventListener('resize', updateMainHeight);
		};
	}, []);

	return (
		<>
			<Header ref={header} className='' />
			<main
				style={{ height: mainHeight }}
				className='h-[calc(100vh-9.75rem)] grow grid grid-cols-12 grid-rows-3 grid-rows-auto gap-x-3 gap-y-6 px-3 tablet:px-5 tablet:gap-x-5 tablet:gap-y-10 desktop:px-8 desktop:gap-x-8 desktop:gap-y-12 widescreen:px-0'
			>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>
			<Footer ref={footer} className='' />
		</>
	);
}
