import Header from '@/components/headerSection/Header/Header.jsx';
import Catalog from '@/components/Catalog/Catalog.jsx';
import Survey from '@/components/surveySection/Survey/Survey.jsx';
import Decisions from '@/components/Decisions/Decisions.jsx';
import ProductionCapabilities from '@/components/ProductionСapabilities/ProductionСapabilities.jsx';
import ProductsSlider from '@/components/ProductsSlider/ProductsSlider.jsx';
import NewsSlider from '@/components/NewsSlider/NewsSlider.jsx';
import Team from '@/components/Team/Team.jsx';
import Map from '@/components/Map/Map.jsx';
import Footer from '@/components/Footer/Footer.jsx';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Catalog />
				<Survey />
				<Decisions />
				<ProductionCapabilities />
				<ProductsSlider />
				<NewsSlider />
				<Team />
				<Map />
			</main>
			<Footer />
		</>
	);
}
