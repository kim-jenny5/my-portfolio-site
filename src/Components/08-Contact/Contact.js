import React from "react";
import { ContactCont, Jenny, ContactCard, TextCont, SNS } from "./style";
import jenny from "../../media/jenny2.png";
import { AtSign, Linkedin, GitHub } from "react-feather";

export default function Contact() {
	return (
		<ContactCont id="contact">
			<Jenny src={jenny}></Jenny>
			<ContactCard>
				<div className="basic-info">
					<div>Jenny Kim</div>
					<div>jennykimdev@gmail.com</div>
				</div>
				<div className="bold job">Frontend Developer</div>
				<SNS>
					<a href="mailto:jennykimdev@gmail.com" target="_blank">
						<AtSign />
					</a>
					<a href="https://github.com/kim-jenny5" target="_blank">
						<GitHub />
					</a>
					<a href="https://www.linkedin.com/in/kim-jenny5/" target="_blank">
						<Linkedin />
					</a>
				</SNS>
				<div>
					<div>City</div>
					<div className="bold">New York, NY</div>
				</div>
			</ContactCard>
		</ContactCont>
	);
}
