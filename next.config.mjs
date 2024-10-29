/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/photo-*',
			},
			{
				protocol: 'http',
				hostname: '83.147.246.205',
				port: '5000',
				pathname: '**',
			},
		],
		//	formats: ['image/avif', 'image/webp'],
	},
	env: {
		HOST: process.env.HOST,
		DOMAIN: process.env.DOMAIN,
	},
	//	swcMinify: true,
};

export default nextConfig;
