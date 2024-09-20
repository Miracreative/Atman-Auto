// 'use client';

// import { useRouter } from 'next/navigation';

import PageTitle from './../../components/PageTitle/PageTitle.jsx';
import GoodsContent from '../../components/goodsPage/GoodsContent/GoodsContent.jsx';

// import products from '@/data/products.js';

export default function Goods() {
	// const router = useRouter();

	return (
		<>
			<PageTitle
				title="Товары"
				text="Клейкие ленты и самоклеящиеся материалы"
			/>
			{/* <button>Товар дня: {router.products.id}</button> */}
			<GoodsContent />
		</>
	);
}
