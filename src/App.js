import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';

export default function App() {
	return (
		<div className='flex flex-col min-h-screen bg-cloud'>
			<Header />
			<main className='flex-grow'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Contact />} />
					<Route path='/contact' element={<Projects />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
