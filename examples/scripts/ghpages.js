const ghpages = require('gh-pages');

ghpages.publish(
	'out',
	{
		repo: 'https://github.com/bitTorin/threelayer.git',
		message: 'published https://bitTorin.github.io/threelayer',
		user: {
			name: 'bitTorin',
			email: 'bitTorin@proton.me',
		},
		dotfiles: true,
	},
	function (err) {
		if (err) {
			console.error(err);
		} else {
			console.log('published https://bitTorin.github.io/threelayer');
		}
	},
);
