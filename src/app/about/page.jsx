import Header from './../../components/Header/Header.jsx';
import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import Algorithm from './../../components/about/Algorithm/Algorithm.jsx';
import Values from './../../components/about/Values/Values.jsx';
import Delivery from './../../components/about/Delivery/Delivery.jsx';
import Team from './../../components/Team/Team.jsx';
import Map from './../../components/Map/Map.jsx';
import Requisites from './../../components/about/Requisites/Requisites.jsx';
import Footer from './../../components/Footer/Footer.jsx';

export default function About() {
	return (
		<>
			{/* <Header></Header> */}
			<main>
				<h1>About page</h1>
				<PageTitle
					title={<div>Проектируя соединение <span>думайте о нас</span></div>}

					text="Мы думаем наперед и поддерживаем вас с помощью наших экспертов, которые лично консультируют и гарантируют высокое качество продукции."></PageTitle>
				<Algorithm></Algorithm>
				{/* <Values></Values> */}
				<Delivery></Delivery>
				{/* <Team></Team>
				<Map></Map> */}
				{/* <Requisites></Requisites> */}
			</main >
			{/* <Footer></Footer> */}
		</>
	);
}
