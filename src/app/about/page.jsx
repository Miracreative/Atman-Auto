import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import Algorithm from '../../components/aboutPage/Algorithm/Algorithm.jsx';
import Values from '../../components/aboutPage/Values/Values.jsx';
import Delivery from '../../components/aboutPage/Delivery/Delivery.jsx';
import PartnersSlider from '@/components/aboutPage/PartnersSlider/PartnersSlider.jsx';
import Team from './../../components/Team/Team.jsx';
import Map from './../../components/Map/Map.jsx';
import Requisites from '../../components/aboutPage/Requisites/Requisites.jsx';


export default function About() {
	return (
		<>

			<PageTitle
				title={
					<div>
						Проектируя соединение <span>думайте о нас</span>
					</div>
				}
				text="Мы думаем наперед и поддерживаем вас с помощью наших экспертов, которые лично консультируют и гарантируют высокое качество продукции."
			></PageTitle>
			{/* <Algorithm></Algorithm> */}
			{/* <Values></Values> */}
			<Delivery></Delivery>
			<PartnersSlider></PartnersSlider>
			<Team></Team>
			{/* <Map></Map> */}
			{/* <Requisites></Requisites> */}
			{/* </main > */}
		</>
	);
}
