import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

export interface SeoProps {
	path?: string;
}

const Seo: React.FC<NextSeoProps & SeoProps> = props => {
	const {
		title = 'threelayer',
		description = 'Plugin to help you use Threebox on Mapbox-GL within a React App',
		path = '',
		...other
	} = props;
	return (
		<NextSeo
			title={title}
			description={description}
			openGraph={{ url: `https://bitTorin.github.io/threelayer${path}`, title, description }}
			{...other}
		/>
	);
};

export default Seo;
