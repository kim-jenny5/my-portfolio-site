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
				<Content>
					<Introduction />
				</Content>
				{/* <About />
				<ProjectsCont />
				<ResumeCont />
				<Contact />
				<Footer /> */}
				<Ft>
					<Footer />
				</Ft>
			</Grid>
		</div>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-column-gap: 1.25rem;
	grid-template-areas:
		"header header header header header header header header header header header header"
		"content content content content content content content content content content content content"
		"footer footer footer footer footer footer footer footer footer footer footer footer";
`;

const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  padding: 0;
}`;

const Section = styled.div`
	border: solid black 1px;
`;

const Header = styled(Section)`
	position: fixed;
	width: 100vw;
	grid-area: header;
`;

const Content = styled(Section)`
	grid-area: content;
`;

const Ft = styled(Section)`
	border: solid red 1px;
	grid-area: footer;
`;
