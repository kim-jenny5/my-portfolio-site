module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				tablet: '768px',
				// tabletLandscape: '1024px',
				desktop: '1128px',
				widescreen: '1440px'
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				orion: '#1D5AE9',
				moss: '#BABE6D',
				obsidian: '#1C1D21',
				grape: '#742DDF',
				mushroom: '#A59980',
				cream: '#E6E4DE',
				cloud: '#f8f9fa'
			}
		}
	},
	plugins: []
};
