import React from "react";
import { PortfolioCont, SemiCircle } from "./style";

export default function Portfolio() {
	return (
		<PortfolioCont>
			<SemiCircle>
				<div>
					<span>
						<a
							href="https://github.com/kim-jenny5/my-portfolio-site"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						/
						<a
							href="https://www.figma.com/file/m8lN7wdXg9pB8MQMqSyt5V/Portfolio-Website?node-id=0%3A1"
							target="_blank"
							rel="noreferrer"
						>
							Wireframes
						</a>
					</span>
				</div>
				<div>for this portfolio site</div>
			</SemiCircle>
		</PortfolioCont>
	);
}
