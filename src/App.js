import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import blobbackground_large from "./media/blobs/blobbackground_large.png";
import blobbackground_small from "./media/blobs/blobbackground_small.png";
import blobbackground_medium from "./media/blobs/blobbackground_medium.png";
import Header from "./Components/01-Header/Header";
import Footer from "./Components/02-Footer/Footer";
import Intro from "./Components/04-Intro/Intro";
import About from "./Components/05-About/About";
import ProjectCont from "./Components/06-Projects/ProjectCont";

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

			<Wrapper>
				<Header />
				<Intro />
				<About />
				<ProjectCont />
				{/* <Content> */}
				{/* <Introduction />
					<About />
					<ProjectsCont />
					<ResumeCont />
					<Contact /> */}
				{/* </Content> */}
			</Wrapper>
			{/* <Footer /> */}
		</>
	);
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #294234;
    font-family: Source Sans Pro;
    font-size: 100%;
    height: 100%;
    /* width: 100vw; */
    overflow-x: hidden;

    @media only screen and (min-width: 320px) {
      background-image: url(${blobbackground_small});
      background-repeat: no-repeat;
      background-size: cover;
    }

    @media only screen and (min-width: 480px) {
      background-image: url(${blobbackground_medium});
      background-repeat: no-repeat;
      background-size: cover;
    }
    
    @media only screen and (min-width: 768px) {
      background-image: url(${blobbackground_medium});
      background-repeat: no-repeat;
      background-size: cover;
    }

    @media only screen and (min-width: 992px) {
      background-image: url(${blobbackground_large});
      background-repeat: no-repeat;
      background-size: cover;

    }

    @media only screen and (min-width: 1200px) {
      background-image: url(${blobbackground_large});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  
  ::selection {
    background: #eae3d7
  }

`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	/* overflow-x: hidden;
	overflow-y: hidden; */

	div:nth-child(n + 2) {
		/* justify-content: center; */
	}
	/* row-gap: 100px; */

	/* XS / Mobile Portrait */
	@media only screen and (min-width: 320px) {
		margin: 1.25rem 1.25rem 0 1.25rem;
	}

	/* S / Mobile Landscape */
	@media only screen and (min-width: 480px) {
		margin: 2.031rem 2.031rem 0 2.031rem;
	}

	/* M / Tablet Portrait */
	@media only screen and (min-width: 768px) {
		margin: 2.813rem 2.813rem 0 2.813rem;
	}

	/* L / Tablet Landscape */
	@media only screen and (min-width: 992px) {
		margin: 3.594rem 3.594rem 0 3.594rem;
	}

	/* XL / Desktop */
	@media only screen and (min-width: 1200px) {
		margin: 4.375rem 4.375rem 0 4.375rem;
	}
`;

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
