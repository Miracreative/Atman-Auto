import Header from './../../components/Header/Header.jsx';
import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import Footer from './../../components/Footer/Footer.jsx';

export default function News() {
	return (
		<>
			<Header></Header>
			<main>
				<h1>News page</h1>
				<PageTitle
					title='Новости'

					text={<div>События в отрасли <br /> и достижения компании </div>}></PageTitle>

			</main >
			<Footer></Footer>
		</>
	);
}
