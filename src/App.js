import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import blobbackground_large from "./media/blobs/blobbackground_large.png";
import blobbackground_small from "./media/blobs/blobbackground_small.png";
import blobbackground_medium from "./media/blobs/blobbackground_medium.png";
// import BlobGraphics from "./BlobGraphics";
import Header from "./Components/01-Header/Header";
import Footer from "./Components/02-Footer/Footer";
import Intro from "./Components/04-Intro/Intro";
import About from "./Components/05-About/About";

// import Introduction from "./Introduction";
// import About from "./About";
// import ProjectsCont from "./ProjectsCont";
// import ResumeCont from "./ResumeCont";
// import Contact from "./Contact";

export default function App() {
	return (
		// <div className="App">
		// <div>
		<>
			<GlobalStyle />
			{/* <Blob1 />
			<Blob2 /> */}

			<Wrapper>
				<Header />
				<Intro />
				<About />
				{/* <Content> */}
				{/* <Introduction />
					<About />
					<ProjectsCont />
					<ResumeCont />
					<Contact /> */}
				{/* </Content> */}
			</Wrapper>
			<Footer />
		</>

		// </div>
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
	/* display: grid; */
	display: flex;
	flex-direction: column;
	height: 100vh;
	/* min-height: 100%; */

	/* XS / Mobile Portrait */
	/* @media only screen and (min-width: 320px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto 1fr 1fr auto;
		grid-column-gap: 1.25rem;
		margin: 1.25rem 1.25rem 0 1.25rem;

		grid-template-areas:
			"hd hd hd hd"
			"intro intro intro intro"
			"about about about about"
			"ft ft ft ft";
	} */

	/* S / Mobile Landscape */
	/* @media only screen and (min-width: 480px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: auto 1fr 1fr auto;
		grid-column-gap: 1.25rem;
		margin: 2.031rem 2.031rem 0 2.031rem;

		grid-template-areas:
			"hd hd hd hd hd hd"
			"intro intro intro intro intro intro"
			"about about about about about about"
			"ft ft ft ft ft ft";
	} */

	/* M / Tablet Portrait */
	/* @media only screen and (min-width: 768px) {
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: auto 1fr 1fr auto;
		margin: 2.813rem 2.813rem 0 2.813rem;

    grid-template-areas:
			"hd hd hd hd hd hd hd hd"
			"intro intro intro intro intro intro intro intro"
			"about about about about about about about about"
			"ft ft ft ft ft ft ft ft";
	} */

	/* L / Tablet Landscape */
	/* @media only screen and (min-width: 992px) {
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: auto 1fr 1fr auto;
		margin: 3.594rem 3.594rem 0 3.594rem;

		grid-template-areas:
			"hd hd hd hd hd hd hd hd hd hd"
			"intro intro intro intro intro intro intro intro intro intro"
			"about about about about about about about about about about"
			"ft ft ft ft ft ft ft ft ft ft";
	} */

	/* XL / Desktop */
	/* @media only screen and (min-width: 1200px) {
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto auto auto auto;
		grid-column-gap: 1.25rem;
		margin: 4.375rem 4.375rem 0 4.375rem;

		grid-template-areas:
			"hd hd hd hd hd hd hd hd hd hd hd hd"
			"intro intro intro intro intro intro intro intro intro intro intro intro"
			"about about about about about about about about about about about about"
			"ft ft ft ft ft ft ft ft ft ft ft ft";
	} */
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
