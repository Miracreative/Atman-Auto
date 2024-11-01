import { HOST } from '@/constants/url';

import ProductCard from '@/components/ProductCard/ProductCard';

import styles from './surveySlide.module.scss';

const SurveySlide = ({ product }) => {
	return (
		<li key={product.id} className={styles.slide}>
			<ProductCard
				id={product.id}
				brand={product.brand}
				title={product.name}
				subtitle={product.type}
				imageurl={`${HOST}/${product.imageurl}`}
				// width="200px"
				// height="250px"
			/>
		</li>
	);
};

export default SurveySlide;
