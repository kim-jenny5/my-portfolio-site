import React from "react";
import { Envelope, GithubFill, LinkedInV1Fill } from "akar-icons";

export default function Contact() {
	return (
		<div id="contact">
			<div className="title-text">
				<div>
					Contact Me<hr></hr>
				</div>
				<div>Let's work together!</div>
			</div>
			<div id="msg">
				Please feel free to reach out to me through any of these platforms. 💌
			</div>
			<div id="contact-links">
				<span>
					<a href="mailto:jennykimdev@gmail.com" target="_blank">
						<Envelope strokeWidth={2} size={30} />
					</a>
					<a href="https://github.com/kim-jenny5" target="_blank">
						<GithubFill strokeWidth={2} size={30} />
					</a>
					<a href="https://www.linkedin.com/in/kim-jenny5/" target="_blank">
						<LinkedInV1Fill strokeWidth={2} size={30} />
					</a>
				</span>
			</div>
		</div>
	);
}
