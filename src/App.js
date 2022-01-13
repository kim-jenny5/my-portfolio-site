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
			<Container>
				<BlobGraphics />
				<HeaderNav />
				<Introduction />
				{/* <About />
				<ProjectsCont />
				<ResumeCont />
				<Contact />
				<Footer /> */}
			</Container>
		</div>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-column-gap: 1.25rem;
`;

const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  padding: 0;
}`;

// grid-template-areas: "header header header header" "main main main main" "footer footer footer footer";
// grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// position: relative;
// align-items: center;
// grid-template-columns: repeat(12, 1fr);
// grid-template-columns: repeat(12, 8.33%);
// margin: 0 70px 0 70px;
// margin: 0;
// padding: 0;

// grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
// const Columns = styled.div`
// 	width: 8.33%;
// 	float: left;
// `;
