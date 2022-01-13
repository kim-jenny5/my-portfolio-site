import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import BlobGraphics from "./BlobGraphics";
import HeaderNav from "./HeaderNav";
import Introduction from "./Introduction";
import About from "./About";
import ProjectsCont from "./ProjectsCont";
import ResumeCont from "./ResumeCont";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Grid>
				{/* <BlobGraphics /> */}
				<Header>
					<HeaderNav />
				</Header>
				<Introduction />
				{/* <About />
				<ProjectsCont />
				<ResumeCont />
				<Contact />
				<Footer /> */}
				<Footer />
			</Grid>
		</div>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: 12.009237875288683vh auto 9.699769053117782vh;
	/* grid-template-rows: auto auto auto; */
	grid-column-gap: 1.25rem;
	grid-template-areas:
		"hd hd hd hd hd hd hd hd hd hd hd hd"
		"content content content content content content content content content content content content"
		"footer footer footer footer footer footer footer footer footer footer footer footer";
`;

const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  padding: 0;
}`;

const Header = styled.div`
	/* position: fixed; */
	width: 100vw;
	grid-area: hd;
	background-color: lightgray;
`;

// const Section = styled.div`
// 	border: solid black 1px;
// `;

// const Header = styled(Section)`

// const Content = styled(Section)`
