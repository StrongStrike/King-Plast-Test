module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				gold: '#ffd700',
			},
			animation: {
				'fade-up': 'fadeUp 1s ease-out forwards',
				'logo-entrance': 'logoIn 1.5s ease-out forwards',
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				logoIn: {
					'0%': { opacity: '0', transform: 'scale(0.8) rotate(-10deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
				},
			},
		},
	},
	plugins: [],
}
