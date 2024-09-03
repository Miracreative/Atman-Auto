import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import './../scss/style.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Atman Auto',
	description: 'Adhesive solutions',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
