import type { Metadata } from 'next';

import { StoreProvider } from '../store/StoreProvider';

// import { Inter, Montserrat } from 'next/font/google';
// import localFont from 'next/font/local';
import montserrat from '../fonts/montserrat.js';

import Favicon from '/public/images/мetadata/favicon.ico';
import OpenGraphImage from '/public/images/opengraph-image/opengraph-image.png';
// import TwitterImage from '/public/images/opengraph-image/twitter-image.png';

import Header from '@/components/headerSection/Header/Header';
import Footer from '@/components/Footer/Footer';

import contacts from '@/data/contacts';

import './../scss/style.scss';

// const montserrat = Montserrat({ subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'] });
// const montserrat = localFont({ src: '../fonts/montserrat.js' });

export const metadata: Metadata = {
	title: 'Atman Auto',
	description: 'Adhesive solutions',
	metadataBase: new URL(contacts.website),
	icons: [{ rel: 'icon', url: Favicon.src }],
	openGraph: {
		title: 'Atman Auto',
		description:
			'Клейкие ленты и самоклеящиеся материалы, адаптированные для применения на вашем производстве.',
		url: contacts.website,
		siteName: 'Atman Auto',
		images: [
			{
				url: OpenGraphImage.src,
				// url: '/public/images/opengraph-image/opengraph-image.png',

				width: 1920,
				height: 1080,
				alt: 'Atman Auto - Adhesive Solutions',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Atman Auto',
		description: 'Adhesive solutions',
		images: [OpenGraphImage.src],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<StoreProvider>
			<html lang="ru">
				<body className={montserrat.className}>
					{/* <body className={inter.className}> */}
					{children}
					{/* <Header />
					<main>{children}</main>
					<Footer /> */}
				</body>
			</html>
		</StoreProvider>
	);
}
