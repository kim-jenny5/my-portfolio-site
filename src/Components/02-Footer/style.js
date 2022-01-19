import styled from "styled-components";

// export const FooterCont = styled.div`
export const FooterCont = styled.footer`
	background: #eae3d7;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (min-width: 320px) {
		height: 3.5rem;
		font-size: 0.625rem;
	}

	@media only screen and (min-width: 480px) {
		height: 4rem;
		font-size: 0.75rem;
	}
`;
