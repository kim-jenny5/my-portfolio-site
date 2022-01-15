import React from "react";
import { IntroCont, MainCont, TextCont, Title, Subtitle, Jenny } from "./style";
import jenny from "../../media/jenny.png";

export default function Intro() {
	return (
		<IntroCont>
			<MainCont>
				<TextCont>
					<Title>
						Hi, my name is Jenny.
						<br />
						Nice to meet you!
					</Title>
					<Subtitle>I'm a frontend developer.</Subtitle>
				</TextCont>
				<Jenny src={jenny}></Jenny>
			</MainCont>
		</IntroCont>
	);
}
