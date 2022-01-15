import React from "react";
import { IntroCont, MainCont, TextCont, Title, Subtitle, Jenny } from "./style";
import jenny from "../../media/jenny.png";
import Typical from "react-typical";

export default function Intro() {
	return (
		<IntroCont>
			<MainCont>
				<div>
					<Title>
						<div>Hi, my name is Jenny.</div>
						<div>Nice to meet you!</div>
					</Title>
					<Subtitle>
						I am{" "}
						<Typical
							wrapper="span"
							steps={steps}
							loop={Infinity}
							className="typing"
						/>
						{/* a developer. */}
					</Subtitle>
				</div>
				<Jenny src={jenny}></Jenny>
			</MainCont>
		</IntroCont>
	);
}

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
