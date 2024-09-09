import Header from './../../components/Header/Header.jsx';
import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import Algorithm from '../../components/aboutPage/Algorithm/Algorithm.jsx';
import Values from '../../components/aboutPage/Values/Values.jsx';
import Delivery from '../../components/aboutPage/Delivery/Delivery.jsx';
import Team from './../../components/Team/Team.jsx';
import Map from './../../components/Map/Map.jsx';
import Requisites from '../../components/aboutPage/Requisites/Requisites.jsx';
import Footer from './../../components/Footer/Footer.jsx';

export default function About() {
	return (
		<>
			{/* <Header></Header> */} {/* хэдер, футер и мейн за счет лэйаута уже прокидываются, потом убрать их отсюда */}
			{/* <main> */}

			<PageTitle
				title={<div>Проектируя соединение <span>думайте о нас</span></div>}

				text="Мы думаем наперед и поддерживаем вас с помощью наших экспертов, которые лично консультируют и гарантируют высокое качество продукции."></PageTitle>
			<Algorithm></Algorithm>
			{/* <Values></Values> */}
			<Delivery></Delivery>
			{/* <Team></Team>
				<Map></Map> */}
			{/* <Requisites></Requisites> */}

			{/* </main > */}
			{/* <Footer></Footer> */}
		</>
	);
}
