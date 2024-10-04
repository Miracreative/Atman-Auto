import QualityNav from '@/components/qualityPage/QualityNav/QualityNav';
import QualityContent from '@/components/qualityPage/QualityContent/QualityContent';

import styles from './QualitySection.module.scss';

const QualitySection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.navContainer}>
				<QualityNav></QualityNav>
			</div>
			<QualityContent></QualityContent>
		</section>
	);
};

export default QualitySection;
