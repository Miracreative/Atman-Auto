import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import GoodsContent from '../../components/goodsPage/GoodsContent/GoodsContent.jsx';

export default function Goods() {
	return (
		<>
			<PageTitle
				title="Товары"
				text="Клейкие ленты и самоклеящиеся материалы"
			/>
			<GoodsContent />
		</>
	);
}
