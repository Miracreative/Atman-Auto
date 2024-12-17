/** @type {import('next').NextConfig} */

const nextConfig = {
	distDir: "build",   
	output: "export", 
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.atman-auto.ru',
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
