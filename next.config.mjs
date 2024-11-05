/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '83.147.246.205',
				port: '5000',
				pathname: '**',
			},
		],
		formats: ['image/avif', 'image/webp'],
	},
	env: {
		HOST: process.env.HOST,
		DOMAIN: process.env.DOMAIN,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	//	swcMinify: true,
};

export default nextConfig;
