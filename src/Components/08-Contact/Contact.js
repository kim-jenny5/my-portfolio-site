import React from "react";
import { ContactCont, Jenny, ContactCard, TextCont, SNS } from "./style";
import jenny from "../../media/jenny2.png";
import { Envelope, GithubFill, LinkedInV1Fill } from "akar-icons";

export default function Contact() {
	return (
		<ContactCont id="contact">
			<Jenny src={jenny}></Jenny>
			<ContactCard>
				<div>
					<div className="bold">Jenny Kim</div>
					<div>jennykimdev@gmail.com</div>
				</div>
				<div className="bold">Frontend Developer</div>
				<SNS>
					<a href="mailto:jennykimdev@gmail.com" target="_blank">
						<Envelope strokeWidth={2} size={30} />
					</a>
					<a href="https://github.com/kim-jenny5" target="_blank">
						<GithubFill strokeWidth={2} size={30} />
					</a>
					<a href="https://www.linkedin.com/in/kim-jenny5/" target="_blank">
						<LinkedInV1Fill strokeWidth={2} size={30} />
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
