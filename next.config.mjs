// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: 'https',
// 				hostname: 'images.unsplash.com',
// 				port: '',
// 				pathname: '/photos/**',
// 			},
// 		],
// 		// 	formats: ['image/avif', 'image/webp'],
// 	},
// 	// swcMinify: true,
// };

// export default nextConfig;

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
	},
};

export default nextConfig;
