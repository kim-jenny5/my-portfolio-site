import { GlobalStyle } from "./style";
import { Wrapper } from "./style";

import Header from "./Components/01-Header/Header";
import { Blob1, Blob2 } from "./Components/03-Blobs/Blobs";
import Intro from "./Components/04-Intro/Intro";
import About from "./Components/05-About/About";
import Projects from "./Components/06-Projects/Projects";
import Contact from "./Components/08-Contact/Contact";
import Portfolio from "./Components/09-Portfolio/Portfolio";
import Footer from "./Components/02-Footer/Footer";

export default function App() {
	return (
		<div>
			<GlobalStyle />
			<Blob1 />
			<Blob2 />
			<Header />
			<Wrapper>
				<Intro />
				<About />
				<Projects />
				<Contact />
			</Wrapper>
			<Portfolio />
			<Footer />
		</div>
	);
}
