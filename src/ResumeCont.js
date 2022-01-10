import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import jenny_kim_resume from "./resume/jenny_kim_resume.pdf";

const education = [
	{
		name: "Flatiron School",
		program: "Full Stack Web Development, Ruby on Rails and JavaScript program",
		city: "New York, NY",
		dates: "February 2021 - December 2021"
	},
	{
		name: "Carnegie Mellon University",
		program:
			"Bachelor of Science in Business Administration; Minor in Japanese",
		city: "Pittsburgh, PA",
		dates: "August 2016 - May 2020"
	},
	{
		name: "Temple University in Japan",
		program: "Sponsored Study Abroad program",
		city: "Tokyo, Japan",
		dates: "January 2018 - April 2018"
	}
];

const experience = [
	{
		name: "MEK Review",
		position:
			"Jr. Counselor of Enrollment and Engagement | Tutoring Administrative Assistant",
		description: [
			"Assisted with various administrative tasks for a local SAT prep school to support and ensure smooth operations",
			"Provided consultations to new/existing students, advising and registering them to appropriate programs accordingly",
			"Communicated with parents and students, troubleshooting issues and escalating them to supervisor when necessary",
			"Helped facilitate registration and billing, making sure invoices were finalized in a timely manner"
		],
		city: "Palisades Park, NJ",
		dates: "June 2020 - June 2021"
	},
	{
		name: "Japan Society",
		position: "Human Resources Intern",
		description: [
			"Migrated 100+ employee records from paper to digital to improve accessibility and ease of maintenance",
			"Helped create a new process for the HR manager to accurately notify employees of their PTO usage each month",
			"Maintained job postings on various hiring platforms and initially screened resumes to identify strong candidates",
			"Updated reimbursement records and worked with Finance to ensure timely delivery of reimbursement checks"
		],
		city: "New York, NY",
		dates: "June 2019 - August 2019"
	}
];

export default function ResumeCont() {
	return (
		<div id="resume">
			<div className="container">
				<div className="top">
					<div className="title-text">
						Resume <hr></hr>
					</div>
					<div className="resume-details">
						<div className="education">
							<div className="title-text">Education</div>
							<div className="info">
								{education.map((edu, idx) => (
									<Education
										key={idx}
										name={edu.name}
										program={edu.program}
										city={edu.city}
										dates={edu.dates}
									/>
								))}
							</div>
						</div>
						<div className="experience">
							<div className="title-text">Experience</div>
							<div className="info">
								{experience.map((exp, idx) => (
									<Experience
										key={idx}
										name={exp.name}
										position={exp.position}
										description={exp.description}
										city={exp.city}
										dates={exp.dates}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="resume-download">
					<button>
						<a href={jenny_kim_resume} download>
							Download Full Resume
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}
