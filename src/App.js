import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';

export default function App() {
	return (
		<div className='bg-cloud min-h-screen flex flex-col'>
			<div className='flex flex-col w-full h-full max-w-screen-xl mx-auto flex-grow'>
				<Header />
				<main className='w-full h-full grow justify-center items-center'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						{/* <Route path='/projects' element={<Contact />} /> */}
						<Route path='/contact' element={<Projects />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</div>
	);
}
