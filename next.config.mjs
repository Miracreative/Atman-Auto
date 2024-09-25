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
	//	swcMinify: true,
};

export default nextConfig;
