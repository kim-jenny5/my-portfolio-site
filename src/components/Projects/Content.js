import Professional from './Professional';
import GalleryWrapper from './GalleryWrapper';
import macOSFolder from '../../assets/images/macos_folder.png';
import portfolio_site from '../../assets/projects/portfolio_site.png';
import friend_portfolio_site_prototype from '../../assets/projects/friend_portfolio_site_prototype.png';
import portfolio_site_v1 from '../../assets/projects/portfolio_site_v1.png';
import pilim from '../../assets/projects/pilim.png';
import my_travelogue from '../../assets/projects/my_travelogue.png';
import my_daily_journal from '../../assets/projects/my_daily_journal.png';
import tableau_dambiance from '../../assets/projects/tableau_dambiance.png';

const PROJECTS = [
	{
		year: '2022-2025',
		name: 'BDG Media',
		projects: [
			{
				name: 'Email Newsletters',
				subs: [
					{ name: 'Fix Outlook Compatibility' },
					{ name: 'Support Dark Mode' }
				]
			},
			{
				name: 'Brand Websites',
				subs: [{ name: 'BDG' }, { name: 'TZR' }, { name: 'Scary Mommy' }]
				// bdg - unsubscribe page
				// scary mommy - add overlay variant card (cms)
				// tzr - add theming to featured headlines
			}
		]
	},
	{
		year: '2022',
		name: 'Personal',
		projects: [
			{
				name: 'Portfolio Website',
				img: portfolio_site,
				createdAt: 'June 19, 2024',
				active: true,
				languages: 'HTML, CSS, JavaScript',
				links: [
					{
						gitHub: ['https://github.com/kim-jenny5/my-portfolio-site'],
						live: 'https://jennykim.dev/'
					}
				]
			},
			{
				name: "Friend's Portfolio Site Prototype",
				img: friend_portfolio_site_prototype,
				createdAt: 'March 12, 2022',
				active: false,
				languages: 'HTML, CSS, JavaScript, Ruby',
				links: [
					{
						gitHub: [
							'https://github.com/kim-jenny5/moon-portfolio-frontend',
							'https://github.com/kim-jenny5/moon-portfolio-backend'
						],
						live: 'https://romantic-kirch-86d465.netlify.app/'
					}
				]
			},
			{
				name: 'Portfolio Website v1',
				img: portfolio_site_v1,
				createdAt: 'January 7, 2022',
				active: true,
				languages: 'HTML, JavaScript',
				links: [
					{
						gitHub: ['https://github.com/kim-jenny5/my-portfolio-site-v1'],
						live: 'https://portfolio-site-v1.netlify.app/'
					}
				]
			}
		]
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
				languages: 'HTML, CSS, JavaScript, Ruby',
				links: [
					{
						gitHub: [
							'https://github.com/kim-jenny5/my-travelogue-frontend',
							'https://github.com/kim-jenny5/my-travelogue-backend'
						]
					},
					{ live: 'https://my-travelogue.netlify.app/' }
				]
			},
			{
				name: "Tableau d'Ambiance",
				img: tableau_dambiance,
				createdAt: 'September 27, 2021',
				active: false,
				languages: 'HTML, CSS, JavaScript, Ruby',
				links: [
					{
						gitHub: [
							'https://github.com/kim-jenny5/tableau-dambiance-frontend',
							'https://github.com/kim-jenny5/tableau-dambiance-backend'
						]
					},
					{ live: 'https://pilim-project.herokuapp.com/' }
				]
			},
			{
				name: 'Pilim',
				img: pilim,
				createdAt: 'August 3, 2021',
				active: false,
				languages: 'HTML, CSS, JavaScript, Ruby',
				links: [
					{ gitHub: ['https://github.com/kim-jenny5/pilim-project'] },
					{ live: 'https://pilim-project.herokuapp.com/' }
				]
			},
			{
				name: 'My Daily Journal',
				img: my_daily_journal,
				createdAt: 'June 6, 2021',
				active: false,
				languages: 'HTML, CSS, Ruby',
				links: [
					{ gitHub: ['https://github.com/kim-jenny5/journal-sinatra-project'] },
					{ live: 'https://mydailyjournal-byjenny.herokuapp.com/' }
				]
			}
		]
	}
];

export default function Content({ selectProject, selectedProject }) {
	const renderSelectedProject = () => {
		if (!selectedProject) return null;

		switch (selectedProject.name) {
			case 'BDG Media':
				return <Professional projects={selectedProject.projects} />;
			case 'Personal':
			case 'Student':
				return <GalleryWrapper projects={selectedProject.projects} />;
			default:
				return null;
		}
	};

	return (
		<>
			{selectedProject ? (
				renderSelectedProject()
			) : (
				<div className='flex flex-col gap-y-4'>
					{PROJECTS.map((project, index) => (
						<div key={index}>
							<div className='flex justify-between items-center px-6 py-2 text-gray-500'>
								<span className='font-medium tracking-wide'>
									{project.year}
								</span>
								<span className='font-light text-xs'>Show Less</span>
							</div>
							<div className='border-t border-gray-200 px-6 py-2 select-none'>
								<div
									tabIndex={0}
									className='inline-block text-center cursor-pointer group'
									onClick={() => selectProject(project)}
								>
									<img
										src={macOSFolder}
										className='w-[100px] p-1 rounded-md group-active:bg-gray-200'
									/>
									<div className='text-sm inline-block px-1 rounded group-active:bg-blue-600 group-active:text-white'>
										{project.name}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
}
