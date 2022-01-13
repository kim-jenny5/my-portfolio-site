import React from "react";
import Typical from "react-typical";
import IMG_1818 from "./images/IMG_1818.PNG";
// import BlobGraphics from "./BlobGraphics";
import styled from "styled-components";

const steps = [
	"a frontend developer.",
	1500,
	"a creator.",
	1500,
	"detail-oriented.",
	1500,
	"analytical.",
	1500,
	"culturally intelligent.",
	1500,
	"always curious.",
	1500
];

export default function Introduction() {
	return (
		<div className="introduction">
			{/* <BlobGraphics /> */}
			<div className="main-container">
				<div className="text-container">
					<div className="title">
						<div>Hi, my name is Jenny.</div>
						<div>Nice to meet you!</div>
					</div>
					<div className="title-text subtitle">
						I am{" "}
						{/* <Typical
							wrapper="span"
							steps={steps}
							loop={Infinity}
							className="typing"
						/> */}
					</div>
				</div>
				{/* <ImgWrapper> */}
				{/* <img src={IMG_1818}></img> */}
				{/* </ImgWrapper> */}
			</div>
		</div>
	);
}

const ImgWrapper = styled.div`
	max-width: 100%;
`;
