import Header from './../../components/Header/Header.jsx';
import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import Footer from './../../components/Footer/Footer.jsx';

export default function Production() {
	return (
		<>
			<Header></Header>
			<main>
				<h1>Production page</h1>
				<PageTitle
					title={<div>Производственные  <span>возможности</span></div>}

					text='Адаптация клейких лент и самоклеящихся материалов для вашего производства - это наша работа'></PageTitle>

			</main >
			<Footer></Footer>
		</>
	);
}