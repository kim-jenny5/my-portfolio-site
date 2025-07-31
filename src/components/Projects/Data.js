import ten_minutes_planner from '../../assets/projects/ten_minutes_planner.png';
import portfolio_site from '../../assets/projects/portfolio_site.png';
import friend_portfolio_site_prototype from '../../assets/projects/friend_portfolio_site_prototype.png';
import portfolio_site_v1 from '../../assets/projects/portfolio_site_v1.png';
import bustle_newsletter from '../../assets/projects/bustle_newsletter.png';
import pilim from '../../assets/projects/pilim.png';
import my_travelogue from '../../assets/projects/my_travelogue.png';
import my_daily_journal from '../../assets/projects/my_daily_journal.png';
import tableau_dambiance from '../../assets/projects/tableau_dambiance.png';

// hard coded for now
const PROJECTS = [
	{
		year: '2022-2025',
		name: 'Personal',
		projects: [
			{
				name: '10 Minutes Planner (Motemote Digital Clone)',
				img: ten_minutes_planner,
				createdAt: 'July 14, 2025',
				active: true,
				tech: 'Next.js, React, TypeScript, Motion, HTML, CSS (Tailwind CSS), Supabase',
				links: [
					{
						gitHub: ['https://github.com/kim-jenny5/motemote-10m-planner'],
						live: 'https://motemote-10m-planner.vercel.app/',
					},
				],
			},
			{
				name: 'Portfolio Website',
				img: portfolio_site,
				createdAt: 'June 19, 2024',
				active: true,
				tech: 'React, JavaScript, Motion, HTML, CSS (Tailwind CSS)',
				links: [
					{
						gitHub: ['https://github.com/kim-jenny5/my-portfolio-site'],
						live: 'https://jennykim.dev/',
					},
				],
			},
			{
				name: "Friend's Portfolio Site Prototype",
				img: friend_portfolio_site_prototype,
				createdAt: 'March 12, 2022',
				active: false,
				tech: 'React, JavaScript, HTML, CSS (Styled Components), Ruby on Rails',
				links: [
					{
						gitHub: [
							'https://github.com/kim-jenny5/moon-portfolio-frontend',
							'https://github.com/kim-jenny5/moon-portfolio-backend',
						],
						live: 'https://romantic-kirch-86d465.netlify.app/',
					},
				],
			},
			{
				name: 'Portfolio Website v1',
				img: portfolio_site_v1,
				createdAt: 'January 7, 2022',
				active: true,
				tech: 'React, JavaScript, HTML, CSS (Styled Components)',
				links: [
					{
						gitHub: ['https://github.com/kim-jenny5/my-portfolio-site-v1'],
						live: 'https://portfolio-site-v1.netlify.app/',
					},
				],
			},
		],
	},
	{
		year: '2022-2025',
		name: 'BDG Media',
		projects: [
			{
				name: 'Email Newsletters',
				img: bustle_newsletter,
				createdAt: '2023',
				active: true,
				tech: 'HTML, CSS',
				links: [
					{
						live: 'https://app.sparkmailapp.com/web-share/APC34KaAnmq-ZCSWzF00E67nQ8QPQ1BavKTVuWNL',
					},
				],
			},
		],
	},
	{
		year: '2021',
		name: 'Student',
		projects: [
			{
				name: 'my travelogue',
				img: my_travelogue,
				createdAt: 'January 5, 2022',
				active: false,
				tech: 'React, JavaScript, HTML, CSS (Material UI), Ruby on Rails, PostgreSQL, JWT',
				links: [
					{
						gitHub: [
							'https://github.com/kim-jenny5/my-travelogue-frontend',
							'https://github.com/kim-jenny5/my-travelogue-backend',
						],
					},
					{ live: 'https://my-travelogue.netlify.app/' },
				],
			},
			{
				name: "Tableau d'Ambiance",
				img: tableau_dambiance,
				createdAt: 'September 27, 2021',
				active: false,
				tech: 'JavaScript, HTML, CSS (Bootstrap), Ruby on Rails, PostgreSQL, Active Storage, AWS S3',
				links: [
					{
						gitHub: [
							'https://github.com/kim-jenny5/tableau-dambiance-frontend',
							'https://github.com/kim-jenny5/tableau-dambiance-backend',
						],
					},
					{ live: 'https://pilim-project.herokuapp.com/' },
				],
			},
			{
				name: 'Pilim',
				img: pilim,
				createdAt: 'August 3, 2021',
				active: false,
				tech: 'JavaScript, Ruby on Rails, HTML, CSS (Bootstrap)',
				links: [
					{ gitHub: ['https://github.com/kim-jenny5/pilim-project'] },
					{ live: 'https://pilim-project.herokuapp.com/' },
				],
			},
			{
				name: 'My Daily Journal',
				img: my_daily_journal,
				createdAt: 'June 6, 2021',
				active: false,
				tech: 'HTML, CSS, Ruby, Sinatra',
				links: [
					{ gitHub: ['https://github.com/kim-jenny5/journal-sinatra-project'] },
					{ live: 'https://mydailyjournal-byjenny.herokuapp.com/' },
				],
			},
		],
	},
];

export default PROJECTS;
