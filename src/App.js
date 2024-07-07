import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
// import Projects from './views/Projects';

export default function App() {
	return (
		<div className='w-full h-full min-h-screen max-w-screen-desktop mx-auto flex flex-col'>
			{/* <div className='col-span-full flex flex-col w-full h-full max-w-screen-xl mx-auto flex-grow'> */}
			<Header />
			{/* <main className='w-full h-full grow grid grid-cols-12 px-3 gap-x-3 tablet:px-5 tablet:gap-x-5 desktop:px-8 desktop:gap-x-8'> */}
			<main className='w-full h-full grow px-3 tablet:px-5 desktop:px-8 widescreen:px-0'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					{/* <Route path='/projects' element={<Projects />} /> */}
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
