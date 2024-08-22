import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

export default function App() {
	return (
		// <div className='w-full h-full min-h-screen max-w-screen-desktop mx-auto flex flex-col'>
		// <div className='w-full h-full min-h-screen max-w-screen-desktop mx-auto flex flex-col'>
		<>
			<Header />
			{/* <main className='grow grid grid-cols-12 grid-rows-2 grid-rows-auto gap-x-3 gap-y-6 px-3 tablet:px-5 tablet:gap-x-5 tablet:gap-y-10 desktop:px-8 desktop:gap-x-8 desktop:gap-y-12 widescreen:px-0'> */}
			<main className='grid grid-cols-12 grid-rows-4 grid-rows-auto gap-x-3 gap-y-6 px-3 tablet:px-5 tablet:gap-x-5 tablet:gap-y-10 desktop:px-8 desktop:gap-x-8 desktop:gap-y-12 widescreen:px-0'>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</>
		// </div>
	);
}
