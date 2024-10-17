import Header from '@/components/headerSection/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function ProductionLayout({
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
