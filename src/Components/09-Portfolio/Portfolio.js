import React from "react";
import { PortfolioCont, SemiCircle, TextCont } from "./style";

export default function Portfolio() {
	return (
		<PortfolioCont>
			<SemiCircle>
				{/* <TextCont> */}
				<div>This portfolio's</div>
				<div>
					<span>GitHub</span>
					<span>Wireframes</span>
				</div>
				{/* </TextCont> */}
			</SemiCircle>
		</PortfolioCont>
	);
}
