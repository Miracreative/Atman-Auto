import Header from './../../components/Header/Header.jsx';
import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import Footer from './../../components/Footer/Footer.jsx';

export default function Knowledge() {
	return (
		<>
			<Header></Header>
			<main>
				<h1>Knowledge page</h1>
				<PageTitle
					title={<div>База <span>знаний</span></div>}

					text={<div>Наш опыт для вашей <br /> эффективности</div>}></PageTitle>

			</main >
			<Footer></Footer>
		</>
	);
}