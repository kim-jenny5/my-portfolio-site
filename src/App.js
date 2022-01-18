import styled from "styled-components";
import { GlobalStyle } from "./appStyle";
import { Wrapper } from "./appStyle";

import Header from "./Components/01-Header/Header";
import Footer from "./Components/02-Footer/Footer";
import Intro from "./Components/04-Intro/Intro";
import About from "./Components/05-About/About";
import Projects from "./Components/06-Projects/Projects";

// import Introduction from "./Introduction";
// import About from "./About";
// import ProjectsCont from "./ProjectsCont";
// import ResumeCont from "./ResumeCont";
// import Contact from "./Contact";

export default function App() {
	return (
		<>
			<GlobalStyle />
			{/* <Blob1 />
			<Blob2 /> */}

			<Header />
			<Wrapper>
				<Intro />
				<About />
				<Projects />
			</Wrapper>
			{/* <Footer /> */}
		</>
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
