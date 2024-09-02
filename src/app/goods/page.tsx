import Header from './../../components/Header/Header.jsx';
import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import Footer from './../../components/Footer/Footer.jsx';

export default function Goods() {
	return (
		<>
			<Header></Header>
			<main>
				<h1>Goods page</h1>
				<PageTitle
					title="Товары"

					text='Клейкие ленты и самоклеящиеся материалы'></PageTitle>

			</main >
			<Footer></Footer>
		</>
	);
}
