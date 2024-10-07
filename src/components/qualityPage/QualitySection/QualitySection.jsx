import PolicyNavPanel from '../PolicyNavPanel/PolicyNavPanel';
import PolicyTextContent from '@/components/qualityPage/PolicyTextContent/PolicyTextContent';

import styles from './QualitySection.module.scss';

const QualitySection = () => {
	return (
		<section className={styles.section}>
			<PolicyNavPanel />

			<PolicyTextContent />
		</section>
	);
};

export default QualitySection;
