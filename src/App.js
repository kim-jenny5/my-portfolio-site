import { GlobalStyle } from "./style";
import { Wrapper } from "./style";

import Header from "./Components/01-Header/Header";
import { Blob1, Blob2 } from "./Components/03-Blobs/Blobs";
import Intro from "./Components/04-Intro/Intro";
import About from "./Components/05-About/About";
import Projects from "./Components/06-Projects/Projects";
import Resume from "./Components/07-Resume/Resume";
import Contact from "./Components/08-Contact/Contact";
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
				<Resume />
				<Contact />
			</Wrapper>
			<Footer />
		</div>
	);
}

// @media only screen and (min-width: 320px) {
// }

// @media only screen and (min-width: 480px) {
// }

// @media only screen and (min-width: 768px) {
// }

// @media only screen and (min-width: 992px) {
// }

// @media only screen and (min-width: 1200px) {
// }
