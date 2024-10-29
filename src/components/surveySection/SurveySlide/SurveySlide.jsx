// import {
// 	useSelector,
// } from 'react-redux';

import ProductCard from '@/components/ProductCard/ProductCard';

import styles from './surveySlide.module.scss';

const SurveySlide = ({ product }) => {
	// const { isMobile, products, loading, error, filterAllParam } = useSelector(
	// 	(state) => state.goods,
	// );

	return (
		<li key={product.id} className={styles.slide}>
			<ProductCard
				id={product.id}
				brand={product.brand}
				title={product.name}
				subtitle={product.type}
				imageurl={'file://nanalit/' + product.imageurl}
				width="200px"
				height="250px"
			/>
		</li>
	);
};

export default SurveySlide;
