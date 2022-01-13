import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<Ft>
			<footer>© 2021 JENNY KIM</footer>
		</Ft>
	);
}

// const Ft = styled(Section)`
const Ft = styled.div`
	/* border: solid red 1px; */
	font-family: Source Sans Pro;
	font-size: 0.75rem;
	background: #eae3d7;
	grid-area: footer;
	text-align: center;
	padding: 3.9260969976905313vh 0 3.9260969976905313vh 0;
	/* position: absolute; */
	width: 100vw;
	/* bottom: 0; */
`;
