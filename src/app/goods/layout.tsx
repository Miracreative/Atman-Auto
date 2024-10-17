import Header from '@/components/headerSection/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function GoodsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
