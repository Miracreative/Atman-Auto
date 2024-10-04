import PageTitle from '@/components/PageTitle/PageTitle';
import QualitySection from '../../../components/qualityPage/QualitySection/QualitySection';

import styles from './QualityPolicy.module.scss';

export default function QualityPolicy() {
	return (
		<section className={styles.section}>
			<PageTitle title="Политика в области качества" />
			<QualitySection />
		</section>
	);
}
