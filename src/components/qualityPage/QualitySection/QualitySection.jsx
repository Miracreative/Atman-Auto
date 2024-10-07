import PolicyNavPanel from '../PolicyNavPanel/PolicyNavPanel';
import QualityContent from '@/components/qualityPage/QualityContent/QualityContent';

import styles from './QualitySection.module.scss';

const QualitySection = () => {
	return (
		<section className={styles.section}>
			<PolicyNavPanel />

			<QualityContent />
		</section>
	);
};

export default QualitySection;
