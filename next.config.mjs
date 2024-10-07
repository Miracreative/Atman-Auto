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
